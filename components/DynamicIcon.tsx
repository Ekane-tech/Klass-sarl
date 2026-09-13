import type { SVGProps } from "react";
import {
  Shirt,
  Anvil,
  DoorOpen,
  Grid2x2,
  Building2,
  ShieldCheck,
  Timer,
  Handshake,
  MapPin,
  Target,
  Lightbulb,
  Zap,
  Flame,
  Sparkles,
  PlugZap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  shirt: Shirt,
  wrench: Anvil,
  door: DoorOpen,
  grid: Grid2x2,
  building: Building2,
  shield: ShieldCheck,
  timer: Timer,
  handshake: Handshake,
  "map-pin": MapPin,
  target: Target,
  lightbulb: Lightbulb,
  zap: Zap,
  flame: Flame,
  sparkles: Sparkles,
  "plug-zap": PlugZap,
};

type DynamicIconProps = SVGProps<SVGSVGElement> & { name: string };

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = map[name] ?? Anvil;
  return <Icon {...props} />;
}
