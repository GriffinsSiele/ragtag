import type { Metadata } from "next";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Training" };

export default function TrainingPage() {
  return (
    <>
      <PageHero image="/media/workshop.jpg" title="The bench" kicker="Training" />

      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[320px] md:min-h-[640px]">
          <CinematicImage src="/media/portrait.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-16">
          <p className="kicker">Mentorship</p>
          <h2 className="display mt-5 text-4xl md:text-5xl">On live productions, not in a classroom vacuum.</h2>
          <p className="mt-6 max-w-md text-white/60">
            Filmmakers, actors, artistes, and sound designers paired with working practitioners. The standard is a
            global stage.
          </p>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 text-ink md:px-16 md:py-32">
        <p className="kicker">Workshops</p>
        <h2 className="display mt-5 max-w-3xl text-4xl md:text-6xl">
          Directing, picture, sound, and how a film actually travels.
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/65">
          Educational programs in production and storytelling — built so the work can reach festivals and
          platforms without losing its voice.
        </p>
      </section>
    </>
  );
}
