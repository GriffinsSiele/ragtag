import Image from "next/image";

export function CinematicImage({
  src,
  alt,
  className = "",
  ken,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  ken?: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="100vw"
      className={`object-cover ${ken ? "hero-ken" : "brightness-110 contrast-[1.05]"} ${className}`}
    />
  );
}
