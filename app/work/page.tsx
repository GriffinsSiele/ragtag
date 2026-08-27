import type { Metadata } from "next";
import Link from "next/link";
import { work } from "@/content/studio";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageHero image="/media/set.jpg" title="Work" kicker="Features, shorts, television, sound" />
      <section className="px-6 py-20 md:px-12">
        <p className="mx-auto max-w-2xl text-center text-white/65">
          A new slate is in motion. These frames describe the studio language we bring to forthcoming features,
          shorts, television, and sound.
        </p>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
          {work.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="work-card group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
                <CinematicImage src={item.image} alt={item.title} className="img" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                    {item.type} · {item.year}
                  </p>
                  <h2 className="mt-2 text-3xl">{item.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
