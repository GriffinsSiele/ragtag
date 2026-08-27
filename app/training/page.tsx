import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Training" };

export default function TrainingPage() {
  return (
    <>
      <PageHero image="/media/workshop.jpg" title="Training" kicker="Mentorship and workshops" />

      <section className="grid md:grid-cols-2">
        <article className="border-b border-white/10 px-6 py-16 md:border-b-0 md:border-r md:px-12 md:py-20">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold">
            <Icon name="users" size={18} />
          </span>
          <p className="mt-5 font-mono text-[11px] text-gold">01</p>
          <h2 className="display mt-2 text-4xl">Mentorship</h2>
          <p className="mt-4 max-w-md text-white/70">
            A program for emerging filmmakers, actors, artistes, and sound designers. Pairing with working
            practitioners, on live productions, with a standard that belongs on a global stage.
          </p>
        </article>
        <article className="px-6 py-16 md:px-12 md:py-20">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold">
            <Icon name="book-open" size={18} />
          </span>
          <p className="mt-5 font-mono text-[11px] text-gold">02</p>
          <h2 className="display mt-2 text-4xl">Workshops</h2>
          <p className="mt-4 max-w-md text-white/70">
            Educational workshops in film production and storytelling: directing, picture, sound, and the business
            of getting African-made work onto festivals and streaming platforms.
          </p>
        </article>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0">
          <CinematicImage src="/media/portrait.jpg" alt="" />
          <div className="absolute inset-0 bg-void/70" />
        </div>
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="display text-4xl md:text-5xl">Apply to the next cohort.</h2>
          <p className="mt-4 text-white/70">
            Tell us who you are and what you want to make. We read every note.
          </p>
          <div className="mt-6">
            <Button href="/contact">Apply</Button>
          </div>
        </div>
      </section>
    </>
  );
}
