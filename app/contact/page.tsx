import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero image="/media/crowd.jpg" title="Start a project" kicker="Brief the studio" />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-12 md:py-20">
        <div>
          <p className="kicker">Commission</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">Tell us the story.</h2>
          <p className="mt-6 text-white/65">
            Features, shorts, television, digital, or training. We work closely with clients so stories are told
            authentically and to a cinema standard.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
