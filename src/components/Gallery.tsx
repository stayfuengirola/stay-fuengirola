"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { GalleryImage } from "@/config/gallery";

type Props = {
  title: string;
  intro: string;
  images: GalleryImage[];
  labels: Record<string, string>;
  controls: { close: string; next: string; previous: string };
};

export function Gallery({ title, intro, images, labels, controls }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : images[active];

  function getAlt(item: GalleryImage) {
    return item.altKey ? labels[item.altKey] ?? item.fallbackAlt : item.fallbackAlt;
  }

  useEffect(() => {
    document.body.classList.toggle("no-scroll", active !== null);
    function onKey(event: KeyboardEvent) {
      if (active === null) return;
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % images.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [active, images.length]);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="lead">{intro}</p>
        <div className="gallery-grid">
          {images.map((item, index) => (
            <button className="gallery-button" key={item.src} onClick={() => setActive(index)} aria-label={getAlt(item)}>
              <Image src={item.src} alt={getAlt(item)} fill sizes={index === 0 ? "(max-width: 900px) 100vw, 45vw" : "(max-width: 900px) 50vw, 25vw"} className="image-cover" />
            </button>
          ))}
        </div>
      </div>
      {current ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={getAlt(current)}>
          <figure>
            <Image src={current.src} alt={getAlt(current)} width={1600} height={1200} priority={false} className="image-contain" />
          </figure>
          <div className="lightbox-bar">
            <button className="icon-button" aria-label={controls.previous} onClick={() => setActive((active! - 1 + images.length) % images.length)}>
              <ChevronLeft aria-hidden="true" />
            </button>
            <button className="icon-button" aria-label={controls.close} onClick={() => setActive(null)}>
              <X aria-hidden="true" />
            </button>
            <button className="icon-button" aria-label={controls.next} onClick={() => setActive((active! + 1) % images.length)}>
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
