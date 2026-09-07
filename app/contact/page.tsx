import type { Metadata } from "next";
import { formats, studio } from "@/content/studio";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero image="/media/crowd.jpg" title="The brief" kicker="Contact" />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:px-12 md:py-28">
        <div>
          <p className="kicker">Desk</p>
          <h2 className="display mt-5 text-4xl md:text-5xl">Tell us the story.</h2>
          <p className="mt-6 max-w-sm text-white/55">{studio.close}</p>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">{studio.location}</p>
          <ul className="mt-8 space-y-2">
            {formats.map((item) => (
              <li key={item} className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
