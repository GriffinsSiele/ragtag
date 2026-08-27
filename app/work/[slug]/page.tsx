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

  return (
    <>
      <section className="relative h-[72vh] min-h-[480px] overflow-hidden">
        <CinematicImage src={item.image} alt={item.title} ken priority />
        <div className="vignette absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-14 md:px-12">
          <p className="kicker">
            {item.type} · {item.year}
          </p>
          <h1 className="display mt-4 text-5xl md:text-7xl">{item.title}</h1>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xl leading-relaxed text-white/75 md:text-2xl">{item.logline}</p>
        <p className="mt-8 text-white/55">
          This chapter of the slate is in development. Commission the studio to shape a feature, short, series, or
          sound world with the same standard of finish.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact">
            Start a project
            <Icon name="arrow-right" size={14} />
          </Button>
          <Button href="/work" variant="ghost">
            Back to work
          </Button>
        </div>
      </section>
    </>
  );
}
