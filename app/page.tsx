import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Klass Sarl — Pressing & Métallerie à Edéa, Cameroun",
  description:
    "Klass Sarl à Edéa (Littoral, Cameroun) : Klass Pressing pour l'entretien du linge et un atelier de métallerie, soudure, portails, garde-corps et structures métalliques sur mesure.",
};

export default function HomePage() {
  return <HomeContent />;
}
