import type { SVGProps } from "react";
import {
  Shirt,
  Wrench,
  DoorOpen,
  Grid2x2,
  Building2,
  Hammer,
  Timer,
  Handshake,
  MapPin,
  Target,
  Lightbulb,
  Zap,
  Flame,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  shirt: Shirt,
  wrench: Wrench,
  door: DoorOpen,
  grid: Grid2x2,
  building: Building2,
  hammer: Hammer,
  timer: Timer,
  handshake: Handshake,
  "map-pin": MapPin,
  target: Target,
  lightbulb: Lightbulb,
  zap: Zap,
  flame: Flame,
  sparkles: Sparkles,
};

type DynamicIconProps = SVGProps<SVGSVGElement> & { name: string };

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = map[name] ?? Wrench;
  return <Icon {...props} />;
}
