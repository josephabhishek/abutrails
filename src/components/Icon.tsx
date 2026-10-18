import {
  Trees,
  Mountain,
  Binoculars,
  Leaf,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Clock,
  TrendingUp,
  Ruler,
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Compass,
  Star,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Trees,
  Mountain,
  Binoculars,
  Leaf,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Clock,
  TrendingUp,
  Ruler,
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Compass,
  Star,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name];
  if (!Cmp) return null;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
