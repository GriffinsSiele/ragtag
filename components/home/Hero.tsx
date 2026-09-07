import Link from "next/link";
import { studio } from "@/content/studio";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <CinematicImage src="/media/hero.jpg" alt="Cinematic production atmosphere" ken priority />
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_18%_70%,rgba(201,163,106,0.16),transparent_55%)]" />
        <div className="vignette absolute inset-0" />
      </div>
      <div className="relative mt-auto w-full px-6 pb-16 pt-32 md:px-12 md:pb-20 lg:px-16">
        <p className="kicker hero-rise mb-5">{studio.kicker}</p>
        <h1 className="hero-rise hero-rise-2 display max-w-5xl text-[46px] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
          {studio.tagline}
        </h1>
        <div className="hero-rise hero-rise-3 mt-10 flex flex-wrap items-center gap-4">
          <Button href="/work">
            View the slate
            <Icon name="arrow-right" size={14} />
          </Button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-white"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition-colors hover:border-white">
              <Icon name="play" size={14} />
            </span>
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
