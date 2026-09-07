import Link from "next/link";
import { formats, services, studio, work } from "@/content/studio";
import { Hero } from "@/components/home/Hero";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const marquee = [...formats, ...formats];

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="overflow-hidden border-y border-white/10 py-4">
        <div className="marquee-track gap-10 px-6">
          {marquee.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.32em] text-white/45"
            >
              {item}
              <span className="h-px w-10 bg-white/20" />
            </span>
          ))}
        </div>
      </div>

      <section className="bg-paper px-6 py-24 text-ink md:px-12 md:py-32">
        <Reveal className="mx-auto max-w-4xl">
          <p className="kicker">The studio</p>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">
            High-end film and sound, told with cultural precision.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">{studio.blurb}</p>
        </Reveal>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">Capabilities</p>
            <h2 className="display mt-5 max-w-xl text-4xl md:text-5xl">Concept to sound.</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(Math.min(i, 3) || 0) as 0 | 1 | 2 | 3}>
                <Link href="/services" className="work-card group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
                    <CinematicImage src={service.image} alt={service.title} className="img" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="display mt-2 text-3xl">{service.title}</h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0">
          <CinematicImage src="/media/culture.jpg" alt="" />
          <div className="absolute inset-0 bg-void/68" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="kicker">Mission</p>
            <p className="display mt-8 text-4xl leading-[1.05] md:text-6xl">{studio.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="kicker">Selected work</p>
              <h2 className="display mt-5 text-4xl md:text-5xl">A slate in motion.</h2>
            </div>
            <Button href="/work" variant="ghost">
              All work
              <Icon name="arrow-up-right" size={14} />
            </Button>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {work.slice(0, 3).map((item) => (
              <Link key={item.slug} href={`/work/${item.slug}`} className="work-card group block">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[24px]">
                  <CinematicImage src={item.image} alt={item.title} className="img" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">{item.type}</p>
                    <h3 className="display mt-1 text-2xl">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
