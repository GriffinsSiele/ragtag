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
    <section className="relative flex min-h-[52vh] overflow-hidden md:min-h-[58vh]">
      <div className="absolute inset-0">
        <CinematicImage src={image} alt="" ken priority />
        <div className="vignette absolute inset-0" />
      </div>
      <div className="relative mt-auto w-full px-6 pb-12 pt-28 md:px-12 md:pb-16 lg:px-16">
        <p className="kicker hero-rise mb-4">{kicker}</p>
        <h1 className="hero-rise hero-rise-2 display max-w-4xl text-5xl text-white md:text-7xl">{title}</h1>
      </div>
    </section>
  );
}
