import fs from "node:fs";
import path from "node:path";
import { excludedGalleryImages, galleryAltKeys, GalleryImage } from "@/config/gallery";

const supportedGalleryExtensions = new Set([".webp", ".jpg", ".jpeg", ".png"]);

function filenameToAlt(filename: string) {
  const name = filename.replace(/\.[^.]+$/, "").replace(/^\d+[-_\s]+/, "");
  return name
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getGalleryImages(): GalleryImage[] {
  const imagesDirectory = path.join(process.cwd(), "public", "images");
  const excluded = new Set(excludedGalleryImages.map((item) => item.toLowerCase()));

  return fs
    .readdirSync(imagesDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((filename) => !filename.startsWith("."))
    .filter((filename) => supportedGalleryExtensions.has(path.extname(filename).toLowerCase()))
    .filter((filename) => !excluded.has(filename.toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }))
    .map((filename) => ({
      id: filename.replace(/\.[^.]+$/, ""),
      src: `/images/${filename}`,
      filename,
      altKey: galleryAltKeys[filename],
      fallbackAlt: filenameToAlt(filename)
    }));
}
