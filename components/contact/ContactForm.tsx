"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/ui/Icon";

const types = ["Feature", "Short", "Television", "Digital", "Training", "Other"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-gold/30 bg-white/5 p-10">
        <Icon name="send" className="text-gold" />
        <h2 className="mt-6 display text-4xl">We have the brief.</h2>
        <p className="mt-4 max-w-md text-white/70">
          Thank you. The studio will review your note and reply with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="kicker">Name</span>
          <input
            required
            name="name"
            className="mt-2 w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white"
          />
        </label>
        <label className="block">
          <span className="kicker">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white"
          />
        </label>
      </div>
      <label className="block">
        <span className="kicker">Organization</span>
        <input
          name="organization"
          className="mt-2 w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white"
        />
      </label>
      <label className="block">
        <span className="kicker">Project type</span>
        <select
          name="type"
          className="mt-2 w-full appearance-none rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white"
          defaultValue="Feature"
        >
          {types.map((t) => (
            <option key={t} value={t} className="bg-ink">
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="kicker">Tell us about the story</span>
        <textarea
          required
          name="message"
          rows={6}
          className="mt-2 w-full rounded-3xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-white"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold pill inline-flex items-center gap-2 px-6 py-3 text-[11px] uppercase tracking-[0.18em] disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send the brief"}
        <Icon name="send" size={14} />
      </button>
      {status === "error" ? (
        <p className="text-sm text-gold-bright">Something went wrong. Please try again.</p>
      ) : null}
    </form>
  );
}
