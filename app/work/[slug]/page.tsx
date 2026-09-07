import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { work } from "@/content/studio";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Icon } from "@/components/ui/Icon";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  return { title: item?.title ?? "Work" };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) notFound();

  const next = work[(work.findIndex((w) => w.slug === slug) + 1) % work.length];

  return (
    <>
      <section className="relative flex min-h-[88svh] overflow-hidden">
        <div className="absolute inset-0">
          <CinematicImage src={item.image} alt={item.title} ken priority />
          <div className="vignette absolute inset-0" />
        </div>
        <div className="relative mt-auto w-full px-6 pb-14 pt-32 md:px-12 md:pb-20">
          <p className="kicker">
            {item.type} · {item.year}
          </p>
          <h1 className="display mt-4 text-5xl md:text-7xl">{item.title}</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:py-24">
        <div>
          <p className="display text-3xl leading-tight text-white md:text-4xl">{item.logline}</p>
          <p className="mt-8 max-w-xl text-white/50">
            This chapter of the slate is open. Commission the studio to shape it with the same standard of finish.
          </p>
        </div>
        <dl className="space-y-6 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pl-10 md:pt-0">
          <div>
            <dt className="kicker">Status</dt>
            <dd className="mt-2 text-white/75">{item.year}</dd>
          </div>
          <div>
            <dt className="kicker">Scope</dt>
            <dd className="mt-2 text-white/75">{item.scope}</dd>
          </div>
          <div>
            <dt className="kicker">Departments</dt>
            <dd className="mt-2 text-white/75">{item.credits.join(" · ")}</dd>
          </div>
        </dl>
      </section>

      <section className="grid md:grid-cols-3">
        {item.gallery.map((src, i) => (
          <div key={src} className={`relative min-h-[240px] md:min-h-[420px] ${i === 0 ? "md:col-span-2" : ""}`}>
            <CinematicImage src={src} alt="" />
          </div>
        ))}
      </section>

      <section className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 py-20 md:flex-row md:items-end md:px-12">
        <div className="flex flex-wrap gap-4">
          <Button href="/contact">
            Start a project
            <Icon name="arrow-right" size={14} />
          </Button>
          <Button href="/work" variant="ghost">
            Back to work
          </Button>
        </div>
        <Button href={`/work/${next.slug}`} variant="ghost">
          Next · {next.title}
          <Icon name="arrow-up-right" size={14} />
        </Button>
      </section>
    </>
  );
}
