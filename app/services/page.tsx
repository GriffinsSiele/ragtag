import type { Metadata } from "next";
import { services, studio } from "@/content/studio";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero image="/media/lens.jpg" title="The suite" kicker="Services" />

      <section className="bg-paper px-6 py-20 text-ink md:px-16 md:py-24">
        <p className="display mx-auto max-w-3xl text-3xl leading-tight md:text-5xl">
          Concept, script, picture, cut, and sound. One standard at any scale.
        </p>
      </section>

      {services.map((service, i) => (
        <section
          key={service.slug}
          className={`grid md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
        >
          <div className="relative min-h-[300px] md:min-h-[520px]">
            <CinematicImage src={service.image} alt={service.title} />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="display mt-4 text-4xl md:text-5xl">{service.title}</h2>
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

      <section className="bg-paper px-6 py-20 text-ink md:px-16 md:py-24">
        <p className="display mx-auto max-w-2xl text-3xl md:text-4xl">{studio.close}</p>
      </section>
    </>
  );
}
