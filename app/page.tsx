import Link from "next/link";
import { goals, services, studio, values, work } from "@/content/studio";
import { Hero } from "@/components/home/Hero";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { IconName } from "@/components/ui/Icon";

const marquee = [...values, ...values].map((v) => v.title);

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="overflow-hidden border-y border-white/10 py-5">
        <div className="marquee-track gap-10 px-6">
          {marquee.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.32em] text-gold">
              {item}
              <span className="h-px w-10 bg-gold/50" />
            </span>
          ))}
        </div>
      </div>

      <section className="bg-paper px-6 py-20 text-ink md:px-12 md:py-24">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="kicker">The studio</p>
          <h2 className="display mx-auto mt-5 max-w-3xl text-4xl md:text-6xl">
            High-end film and sound, told with cultural precision.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
            {studio.blurb}
          </p>
        </Reveal>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker">Capabilities</p>
            <h2 className="display mt-5 max-w-xl text-4xl md:text-5xl">A full suite, any scale.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(Math.min(i, 3) || 0) as 0 | 1 | 2 | 3}>
                <Link
                  href="/services"
                  className="card-lux block rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold">
                    <Icon name={service.icon as IconName} size={18} />
                  </span>
                  <h3 className="mt-5 text-2xl tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{service.summary}</p>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={3}>
              <Link
                href="/training"
                className="card-lux block rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold">
                  <Icon name="users" size={18} />
                </span>
                <h3 className="mt-5 text-2xl tracking-tight">Mentorship</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Training for emerging filmmakers, actors, artistes, and sound designers.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0">
          <CinematicImage src="/media/culture.jpg" alt="" />
          <div className="absolute inset-0 bg-void/70" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="kicker">Mission</p>
            <p className="display mt-6 text-3xl leading-tight md:text-5xl">{studio.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-24">
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
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {work.slice(0, 3).map((item) => (
              <Link key={item.slug} href={`/work/${item.slug}`} className="work-card group block">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[24px]">
                  <CinematicImage src={item.image} alt={item.title} className="img" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">{item.type}</p>
                    <h3 className="mt-1 text-2xl">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 text-ink md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="kicker">Annual aims</p>
          <h2 className="display mt-5 max-w-xl text-4xl md:text-5xl">Built for impact, not volume.</h2>
          <ol className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {goals.map((goal, i) => (
              <li key={goal} className="grid gap-4 py-7 md:grid-cols-[120px_1fr] md:items-start">
                <span className="font-mono text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-relaxed md:text-xl">{goal}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0">
          <CinematicImage src="/media/night.jpg" alt="" />
          <div className="absolute inset-0 bg-void/75" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="kicker">Commission</p>
          <h2 className="display mt-5 text-4xl md:text-6xl">Bring your vision to life.</h2>
          <p className="mx-auto mt-6 max-w-xl text-white/70">{studio.close}</p>
          <div className="mt-8">
            <Button href="/contact">
              Start a project
              <Icon name="arrow-right" size={14} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
