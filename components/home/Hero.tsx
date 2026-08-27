import Link from "next/link";
import { studio } from "@/content/studio";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <CinematicImage src="/media/hero.jpg" alt="Cinematic production atmosphere" ken priority />
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_20%_40%,rgba(201,163,106,0.22),transparent_55%)]" />
        <div className="vignette absolute inset-0" />
      </div>
      <div className="relative px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-[6.5rem] lg:px-16">
        <p className="kicker hero-rise mb-4">{studio.kicker}</p>
        <h1 className="hero-rise hero-rise-2 display max-w-5xl text-[42px] text-white sm:text-5xl md:text-6xl lg:text-[80px]">
          {studio.tagline}
        </h1>
        <div className="hero-rise hero-rise-3 mt-8 flex flex-wrap items-center gap-4">
          <Button href="/work">
            View the slate
            <Icon name="arrow-right" size={14} />
          </Button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-gold"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition-colors hover:border-gold">
              <Icon name="play" size={14} />
            </span>
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
