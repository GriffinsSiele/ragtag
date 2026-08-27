import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="kicker">404</p>
      <h1 className="display mt-4 text-5xl">This frame does not exist.</h1>
      <Link href="/" className="btn-gold pill mt-10 px-6 py-3 text-[11px] uppercase tracking-[0.18em]">
        Back to studio
      </Link>
    </section>
  );
}
