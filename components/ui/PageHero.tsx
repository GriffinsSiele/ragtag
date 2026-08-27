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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <CinematicImage src={image} alt="" ken priority />
        <div className="vignette absolute inset-0" />
      </div>
      <div className="relative px-6 pb-16 pt-24 md:px-12 md:pb-20 md:pt-[6.5rem] lg:px-16">
        <p className="kicker hero-rise mb-3">{kicker}</p>
        <h1 className="hero-rise hero-rise-2 display max-w-4xl text-4xl text-white md:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
