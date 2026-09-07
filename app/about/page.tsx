import type { Metadata } from "next";
import { goals, studio, values } from "@/content/studio";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Studio" };

export default function AboutPage() {
  return (
    <>
      <PageHero image="/media/about.jpg" title="The studio" kicker="Who we are" />

      <section className="bg-paper px-6 py-24 text-ink md:px-16 md:py-32">
        <Reveal className="mx-auto max-w-3xl">
          <p className="kicker">Ragtag</p>
          <p className="display mt-6 text-4xl leading-[1.1] md:text-5xl">{studio.blurb}</p>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[320px] md:min-h-[560px]">
          <CinematicImage src="/media/culture.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-20">
          <p className="kicker">Mission</p>
          <p className="display mt-6 text-3xl md:text-5xl">{studio.mission}</p>
          <p className="kicker mt-14">Vision</p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">{studio.vision}</p>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="kicker">How we work</p>
          <h2 className="display mt-5 text-4xl md:text-5xl">Five lines we do not cross.</h2>
          <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {values.map((value) => (
              <li key={value.title} className="grid gap-5 py-8 md:grid-cols-[220px_1fr] md:items-center">
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70">
                    <Icon name={value.icon as IconName} size={16} />
                  </span>
                  <h3 className="text-xl">{value.title}</h3>
                </div>
                <p className="text-lg leading-relaxed text-white/60">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 text-ink md:px-12 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="kicker">Annual aims</p>
          <h2 className="display mt-5 text-4xl md:text-5xl">Built for impact, not volume.</h2>
          <ol className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {goals.map((goal, i) => (
              <li key={goal} className="grid gap-4 py-7 md:grid-cols-[88px_1fr]">
                <span className="font-mono text-sm text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-relaxed md:text-xl">{goal}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
