import {
  Home, Factory, Droplets, Wrench, CalendarCheck, FileCheck2, ClipboardList,
  ShieldCheck, BadgeIndianRupee, Zap, Headset, Sun, Users, Award, Clock, Gauge,
  MapPin, Search, PencilRuler, HardHat, PlugZap, LifeBuoy, MessagesSquare,
  type LucideIcon,
} from "lucide-react";

/** Config/content refer to icons by Lucide name. Add new ones here. */
const ICONS: Record<string, LucideIcon> = {
  Home, Factory, Droplets, Wrench, CalendarCheck, FileCheck2, ClipboardList,
  ShieldCheck, BadgeIndianRupee, Zap, Headset, Sun, Users, Award, Clock, Gauge,
  MapPin, Search, PencilRuler, HardHat, PlugZap, LifeBuoy, MessagesSquare,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Sun;
}
