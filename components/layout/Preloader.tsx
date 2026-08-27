"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("ragtag-intro");
    if (seen) return;
    setVisible(true);
    sessionStorage.setItem("ragtag-intro", "1");
    const hide = window.setTimeout(() => setVisible(false), 2500);
    return () => window.clearTimeout(hide);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader" aria-hidden>
      <img src="/brand/logo-mark.png" alt="" />
    </div>
  );
}
