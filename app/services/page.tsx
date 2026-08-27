import type { Metadata } from "next";
import { services } from "@/content/studio";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import type { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero image="/media/lens.jpg" title="Production services" kicker="Concept to sound" />

      <section className="bg-paper px-6 py-16 text-ink md:px-12 md:py-20">
        <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed md:text-2xl">
          We offer a full suite of production services, from concept development and scriptwriting to filming,
          editing, and sound design. Our equipment and creative expertise handle projects of any scale, with every
          detail aligned to the client&apos;s vision.
        </p>
      </section>

      {services.map((service, i) => (
        <section key={service.slug} className={`grid md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
          <div className="relative min-h-[280px] md:min-h-[420px]">
            <CinematicImage src={service.image} alt={service.title} />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 md:px-14">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold">
              <Icon name={service.icon as IconName} size={18} />
            </span>
            <p className="mt-5 font-mono text-[11px] text-gold">0{i + 1}</p>
            <h2 className="display mt-2 text-4xl md:text-5xl">{service.title}</h2>
            <p className="mt-4 max-w-md text-white/70">{service.summary}</p>
            <ul className="mt-5 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="h-px w-6 bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="px-6 py-20 text-center md:py-24">
        <p className="kicker">Next</p>
        <h2 className="display mx-auto mt-3 max-w-2xl text-4xl md:text-5xl">Let us help you bring your vision to life.</h2>
        <div className="mt-8">
          <Button href="/contact">Start a project</Button>
        </div>
      </section>
    </>
  );
}
