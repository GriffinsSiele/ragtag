import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "gold" | "ghost" | "dark";

const styles: Record<Variant, string> = {
  gold: "btn-gold",
  ghost: "border border-white/20 text-white hover:border-gold hover:text-gold",
  dark: "bg-ink text-paper hover:bg-black",
};

export function Button({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`pill inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
