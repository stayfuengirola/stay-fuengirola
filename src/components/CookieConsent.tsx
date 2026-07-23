"use client";

import { useEffect, useState } from "react";
import { cookieConsentStorageKey } from "@/lib/analytics";

export function CookieConsent({ title, text, accept, reject }: { title: string; text: string; accept: string; reject: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(cookieConsentStorageKey));
  }, []);

  function choose(value: string) {
    localStorage.setItem(cookieConsentStorageKey, value);
    window.gtag?.("consent", "update", {
      analytics_storage: value === "accepted" ? "granted" : "denied"
    });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookie" aria-label={title}>
      <strong>{title}</strong>
      <p className="small">{text}</p>
      <div className="cookie-actions">
        <button className="cta" onClick={() => choose("accepted")}>{accept}</button>
        <button className="cta secondary" onClick={() => choose("rejected")}>{reject}</button>
      </div>
    </aside>
  );
}
