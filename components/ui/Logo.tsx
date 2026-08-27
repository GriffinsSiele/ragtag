export function Logo({
  size = "nav",
}: {
  size?: "nav" | "footer" | "intro";
}) {
  const height =
    size === "footer" ? "h-11 md:h-14" : size === "intro" ? "h-16 md:h-20" : "h-7 md:h-8";

  return (
    <img
      src="/brand/logo-mark.png"
      alt={size === "nav" ? "" : "Ragtag"}
      className={`logo-mark w-auto ${height}`}
    />
  );
}
