import Link from "next/link";
import { studio } from "@/content/studio";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section className="relative h-dvh min-h-[640px] overflow-hidden">
      <CinematicImage src="/media/hero.jpg" alt="Cinematic production atmosphere" ken priority />
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_20%_40%,rgba(201,163,106,0.22),transparent_55%)]" />
      <div className="vignette absolute inset-0" />
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50 md:block" style={{ writingMode: "vertical-rl" }}>
        Scroll
      </div>
      <div className="absolute inset-x-0 bottom-0 px-6 pb-20 md:px-12 lg:px-16">
        <p className="kicker mb-5">{studio.kicker}</p>
        <h1 className="display max-w-5xl text-[48px] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
          {studio.tagline}
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/work">
            View the slate
            <Icon name="arrow-right" size={14} />
          </Button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80 hover:text-gold"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25">
              <Icon name="play" size={14} />
            </span>
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
