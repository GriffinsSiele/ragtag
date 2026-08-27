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
  const Cmp = icons[name];
  return <Cmp size={size} strokeWidth={1.5} className={className} aria-hidden />;
}
