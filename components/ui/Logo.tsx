export function Logo({
  size = "nav",
}: {
  size?: "nav" | "footer" | "intro";
}) {
  const height =
    size === "footer" ? "h-10 md:h-12" : size === "intro" ? "h-16 md:h-20" : "h-6";
  const studios =
    size === "intro"
      ? "mt-1 text-[7px] tracking-[0.38em] text-white/50"
      : "mt-px origin-top scale-[0.42] text-[10px] tracking-[0.32em] text-white/40";

  return (
    <span
      className="logo-lockup inline-flex flex-col items-center leading-none"
      aria-label={size === "nav" ? undefined : "Ragtag Studios"}
    >
      <img src="/brand/logo-mark.png" alt="" className={`logo-mark w-auto ${height}`} />
      <span className={`font-mono uppercase ${studios}`}>Studios</span>
    </span>
  );
}
