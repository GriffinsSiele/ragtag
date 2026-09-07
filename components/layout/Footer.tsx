import Link from "next/link";
import { nav, socials, studio } from "@/content/studio";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

const social =
  "grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-end md:px-10 md:py-20">
        <div>
          <p className="kicker">Commission</p>
          <h2 className="display mt-4 max-w-xl text-4xl md:text-6xl">Bring the story.</h2>
        </div>
        <Link
          href="/contact"
          className="btn-gold pill inline-flex items-center gap-2 px-6 py-3 text-[11px] uppercase tracking-[0.18em]"
        >
          Start a project
          <Icon name="arrow-right" size={14} />
        </Link>
      </div>

      <div className="gold-rule" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-4 md:px-10 md:py-16">
        <div className="md:col-span-2">
          <Logo size="footer" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            {studio.blurb}
          </p>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            {studio.location}
          </p>
        </div>
        <div>
          <p className="kicker mb-4">Navigate</p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker mb-4">Studio</p>
          <Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-white">
            {studio.emailLabel}
          </Link>
          <div className="mt-6 flex gap-3">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={social}
              >
                <Icon name={item.name} size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="gold-rule" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-[11px] uppercase tracking-[0.16em] text-white/35 md:flex-row md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Ragtag Studios</p>
        <p>Film and sound</p>
      </div>
    </footer>
  );
}
