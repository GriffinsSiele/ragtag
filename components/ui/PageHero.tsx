import { CinematicImage } from "@/components/ui/CinematicImage";

export function PageHero({
  image,
  title,
  kicker,
}: {
  image: string;
  title: string;
  kicker: string;
}) {
  return (
    <section className="relative h-[78vh] min-h-[520px] overflow-hidden">
      <CinematicImage src={image} alt="" ken priority />
      <div className="vignette absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-16 md:px-12 lg:px-16">
        <p className="kicker mb-4">{kicker}</p>
        <h1 className="display max-w-4xl text-5xl text-white md:text-7xl lg:text-[84px]">{title}</h1>
      </div>
    </section>
  );
}
