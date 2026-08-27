"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/studio";
import { Icon } from "@/components/ui/Icon";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 md:px-6">
        <nav
          className={`nav-shell pill flex h-14 w-full max-w-[1120px] items-center justify-between gap-4 px-2 pl-4 md:h-[52px] ${
            scrolled ? "bg-black/78" : ""
          }`}
        >
          <Link href="/" className="flex items-center" aria-label="Ragtag Studios home">
            <img src="/brand/logo.png" alt="Ragtag Studios" className="logo-blend h-9 w-auto md:h-10" />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  pathname === item.href ? "text-gold" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="btn-gold pill hidden px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] md:inline-flex"
            >
              Start a project
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center text-white md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "x" : "menu"} size={20} />
            </button>
          </div>
        </nav>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-void/96 px-8 pt-28 md:hidden">
          <div className="flex flex-col gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-sm uppercase tracking-[0.22em] text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gold pill mt-4 inline-flex w-max px-5 py-3 text-[11px] uppercase tracking-[0.18em]">
              Start a project
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
