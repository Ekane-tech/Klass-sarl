import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Klass Sarl",
  description:
    "Contactez Klass Sarl à Edéa : +237 699 84 84 50, +237 690 76 08 85, +237 682 34 80 87, Klasssarl@yahoo.com, BP 713 Edéa, Cameroun.",
};

export default function ContactPage() {
  return <ContactContent />;
}
