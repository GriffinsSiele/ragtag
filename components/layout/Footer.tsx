import Link from "next/link";
import { nav, studio } from "@/content/studio";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

const social =
  "grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4 md:px-10 md:py-16">
        <div className="md:col-span-2">
          <Logo size="footer" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{studio.tagline}. Film, television, and sound for a global audience.</p>
        </div>
        <div>
          <p className="kicker mb-4">Navigate</p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker mb-4">Studio</p>
          <p className="text-sm leading-relaxed text-white/70">
            Crafting authentic African stories with international partners, festival ambition, and cinema-grade finish.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://kick.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Kick"
              className={social}
            >
              <Icon name="kick" size={15} />
            </a>
            <span className={social}>
              <Icon name="instagram" size={15} />
            </span>
            <span className={social}>
              <Icon name="youtube" size={15} />
            </span>
            <span className={social}>
              <Icon name="linkedin" size={15} />
            </span>
          </div>
        </div>
      </div>
      <div className="gold-rule" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-[11px] uppercase tracking-[0.16em] text-white/40 md:flex-row md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Ragtag Studios</p>
        <p>Film and sound production</p>
      </div>
    </footer>
  );
}
