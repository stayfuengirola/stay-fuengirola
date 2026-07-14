"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqKeys } from "@/config/faq";

export function FaqAccordion({ dictionary }: { dictionary: Record<string, string> }) {
  const [open, setOpen] = useState("checkin");

  return (
    <div className="faq-list">
      {faqKeys.map((key) => {
        const id = `faq-${key}`;
        const expanded = open === key;
        return (
          <div className="faq-item" key={key}>
            <button aria-expanded={expanded} aria-controls={id} onClick={() => setOpen(expanded ? "" : key)}>
              <span>{dictionary[`${key}Q`]}</span>
              <ChevronDown aria-hidden="true" style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {expanded ? <p id={id}>{dictionary[`${key}A`]}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
