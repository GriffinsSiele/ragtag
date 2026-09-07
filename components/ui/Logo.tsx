export function Logo({
  size = "nav",
}: {
  size?: "nav" | "footer" | "intro";
}) {
  const height =
    size === "footer" ? "h-10 md:h-12" : size === "intro" ? "h-16 md:h-20" : "h-6";
  const studios =
    size === "footer"
      ? "mt-1 text-[9px] md:text-[11px]"
      : size === "intro"
        ? "mt-1.5 text-[11px] md:text-xs"
        : "mt-px text-[7px]";

  return (
    <span
      className="logo-lockup inline-flex flex-col items-center leading-none"
      aria-label={size === "nav" ? undefined : "Ragtag Studios"}
    >
      <img src="/brand/logo-mark.png" alt="" className={`logo-mark w-auto ${height}`} />
      <span className={`font-mono uppercase tracking-[0.32em] text-white/80 ${studios}`}>Studios</span>
    </span>
  );
}
