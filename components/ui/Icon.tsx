import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Edit3,
  Film,
  Heart,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Play,
  Send,
  Share2,
  Users,
  Video,
  Volume2,
  X,
  Youtube,
  Zap,
} from "react-feather";

function KickMark({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M0 0h7.2v24H0zm10.08 0h3.6v9.6L21.6 0H24v.96L15.36 12 24 23.04V24h-2.4L13.68 14.4V24h-3.6z" />
    </svg>
  );
}

const icons = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  award: Award,
  "book-open": BookOpen,
  "edit-3": Edit3,
  film: Film,
  heart: Heart,
  home: Home,
  instagram: Instagram,
  kick: KickMark,
  linkedin: Linkedin,
  mail: Mail,
  menu: Menu,
  play: Play,
  send: Send,
  "share-2": Share2,
  users: Users,
  video: Video,
  "volume-2": Volume2,
  x: X,
  youtube: Youtube,
  zap: Zap,
};

export type IconName = keyof typeof icons;

export function Icon({
  name,
  size = 20,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  if (name === "kick") {
    return <KickMark size={size} className={className} />;
  }
  const Cmp = icons[name];
  return <Cmp size={size} strokeWidth={1.5} className={className} aria-hidden />;
}
