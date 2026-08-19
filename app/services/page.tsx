import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Nos services — Pressing & Métallerie",
  description:
    "Klass Pressing (lavage, repassage, entretien du linge) et atelier de métallerie à Edéa : soudure, portails, garde-corps, barreaux et structures métalliques sur mesure.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
