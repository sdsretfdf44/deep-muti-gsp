import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  Baby,
  Bone,
  Calendar,
  CalendarCheck,
  Car,
  ChevronRight,
  ClipboardList,
  Clock,
  Ear,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  Hospital,
  MapPin,
  Phone,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Activity,
  ArrowUpRight,
  Baby,
  Bone,
  Calendar,
  CalendarCheck,
  Car,
  ChevronRight,
  ClipboardList,
  Clock,
  Ear,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  Hospital,
  MapPin,
  Phone,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
};

export function Icon({
  name,
  size = 20,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = map[name] || Activity;
  return <Cmp size={size} className={className} aria-hidden="true" />;
}
