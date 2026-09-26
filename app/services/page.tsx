import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Nos services — Métallerie, soudure & pressing à Edéa",
  description:
    "Atelier de métallerie à Edéa : soudure, usinage, portails, garde-corps, barreaux et structures métalliques sur mesure. Et Klass Pressing à Edéa : lavage, repassage et entretien du linge.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
