import type { Metadata } from "next";
import { services } from "@/content/studio";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import type { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  const [lead, ...rest] = services;

  return (
    <>
      <PageHero image="/media/lens.jpg" title="The suite" kicker="Services" />

      <section className="border-b border-white/10 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-4">
          {services.map((service, i) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="group flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white"
            >
              <span className="text-white/25 group-hover:text-gold">{String(i + 1).padStart(2, "0")}</span>
              {service.title}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-paper px-6 py-20 text-ink md:px-16 md:py-28">
        <p className="kicker">The path</p>
        <h2 className="display mt-5 max-w-3xl text-4xl md:text-6xl">
          Concept to sound, including the clothes in the frame.
        </h2>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-ink/10 md:grid-cols-6">
          {services.map((service, i) => (
            <li key={service.slug} className="bg-paper-2 px-5 py-6">
              <p className="font-mono text-[11px] text-ink/35">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-sm leading-snug">{service.title}</p>
            </li>
          ))}
        </ol>
      </section>

      {lead ? (
        <section id={lead.slug} className="relative min-h-[78vh] overflow-hidden scroll-mt-24">
          <div className="absolute inset-0">
            <CinematicImage src={lead.image} alt={lead.title} />
            <div className="vignette absolute inset-0" />
          </div>
          <div className="relative flex min-h-[78vh] items-end px-6 py-16 md:px-16 md:py-20">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">01 · {lead.title}</p>
              <h2 className="display mt-4 text-5xl md:text-7xl">{lead.title}</h2>
              <p className="mt-5 text-white/70">{lead.summary}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {lead.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="h-px w-6 bg-gold/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {rest.map((service, i) => (
        <section
          id={service.slug}
          key={service.slug}
          className={`scroll-mt-24 grid md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
        >
          <div className="relative min-h-[280px] md:min-h-[560px]">
            <CinematicImage src={service.image} alt={service.title} />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70">
              <Icon name={service.icon as IconName} size={16} />
            </span>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
              {String(i + 2).padStart(2, "0")}
            </p>
            <h2 className="display mt-3 text-4xl md:text-5xl">{service.title}</h2>
            <p className="mt-5 max-w-md text-white/60">{service.summary}</p>
            <ul className="mt-8 space-y-3">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-white/75">
                  <span className="h-px w-6 bg-white/30" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
