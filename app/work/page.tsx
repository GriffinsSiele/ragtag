import type { Metadata } from "next";
import Link from "next/link";
import { work } from "@/content/studio";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageHero image="/media/set.jpg" title="The slate" kicker="Work" />
      <section className="px-6 py-20 md:px-12 md:py-24">
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/55">
          Forthcoming features, shorts, television, and sound. The frames describe the language we bring to each.
        </p>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
          {work.map((item, i) => (
            <Reveal
              key={item.slug}
              delay={(Math.min(i, 3) || 0) as 0 | 1 | 2 | 3}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <Link href={`/work/${item.slug}`} className="work-card group">
                <div className={`relative overflow-hidden rounded-[28px] ${i === 0 ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
                  <CinematicImage src={item.image} alt={item.title} className="img" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                      {item.type} · {item.year}
                    </p>
                    <h2 className="display mt-2 text-3xl md:text-4xl">{item.title}</h2>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
