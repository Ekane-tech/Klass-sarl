import type { SVGProps } from "react";
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as PinIcon,
  Clock as ClockIcon,
  ArrowRight as ArrowRightIcon,
  ArrowLeft as ArrowLeftIcon,
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
  MenuIcon,
  CloseIcon,
  CheckIcon,
  GlobeIcon,
  QuoteIcon,
  StarIcon,
  SparklesIcon,
};
export type { LucideIcon } from "lucide-react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...props} aria-hidden>
      <rect width="40" height="40" rx="9" fill="currentColor" className="text-brand-600" />
      <path
        d="M11 29V11h6.5c3.4 0 5.6 2 5.6 5 0 2.5-1.6 4.2-4 4.6l4.9 8.4H20l-4.3-7.7h-1.7V29H11zm3.9-10.4h2.2c1.8 0 2.9-1 2.9-2.4S18.9 14 17.1 14h-2.2v4.6z"
        fill="#fff"
      />
    </svg>
  );
}
