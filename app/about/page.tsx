import type { Metadata } from "next";
import { goals, studio, values } from "@/content/studio";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import type { IconName } from "@/components/ui/Icon";

export const metadata: Metadata = { title: "Studio" };

export default function AboutPage() {
  return (
    <>
      <PageHero image="/media/about.jpg" title="About us" kicker="Mission, vision, and the studio" />

      <section className="bg-paper px-6 py-24 text-ink md:px-12">
        <Reveal className="mx-auto max-w-3xl">
          <p className="kicker">Ragtag Studios</p>
          <p className="mt-6 text-xl leading-relaxed md:text-2xl">{studio.blurb}</p>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="border-b border-white/10 px-6 py-20 md:border-b-0 md:border-r md:px-12">
          <p className="kicker">Mission</p>
          <p className="display mt-6 max-w-xl text-3xl md:text-4xl">{studio.mission}</p>
        </div>
        <div className="px-6 py-20 md:px-12">
          <p className="kicker">Vision</p>
          <p className="display mt-6 max-w-xl text-3xl md:text-4xl">{studio.vision}</p>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 text-ink md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="kicker">Core values</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">How we work.</h2>
          <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {values.map((value) => (
              <li key={value.title} className="grid gap-6 py-10 md:grid-cols-[220px_1fr] md:items-center">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold">
                    <Icon name={value.icon as IconName} size={18} />
                  </span>
                  <h3 className="text-2xl">{value.title}</h3>
                </div>
                <p className="text-lg leading-relaxed text-ink/70">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="kicker">Goals</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">What we are building toward.</h2>
          <ol className="mt-12 space-y-6">
            {goals.map((goal, i) => (
              <li key={goal} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:flex md:gap-10">
                <span className="font-mono text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-lg md:mt-0 md:text-xl">{goal}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14">
            <Button href="/contact">Work with the studio</Button>
          </div>
        </div>
      </section>
    </>
  );
}
