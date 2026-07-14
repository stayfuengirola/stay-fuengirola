"use client";

import { useEffect, useState } from "react";

const key = "fuengirola-cookie-consent";

export function CookieConsent({ title, text, accept, reject }: { title: string; text: string; accept: string; reject: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(key));
  }, []);

  function choose(value: string) {
    localStorage.setItem(key, value);
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
