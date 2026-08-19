import type { SVGProps } from "react";
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as PinIcon,
  Clock as ClockIcon,
  ArrowRight as ArrowRightIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowUp as ArrowUpIcon,
  Menu as MenuIcon,
  X as CloseIcon,
  Check as CheckIcon,
  Globe as GlobeIcon,
  Quote as QuoteIcon,
  Star as StarIcon,
  Sparkles as SparklesIcon,
} from "lucide-react";

export {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  MenuIcon,
  CloseIcon,
  CheckIcon,
  GlobeIcon,
  QuoteIcon,
  StarIcon,
  SparklesIcon,
};
export type { LucideIcon } from "lucide-react";

import Image from "next/image";
import type { ImageProps } from "next/image";

export function Logo(props: Omit<ImageProps, "src" | "alt" | "width" | "height">) {
  return <Image src="/images/klass-sarl-logo.png" alt="Klass Sarl Logo" width={40} height={40} {...props} />;
}
