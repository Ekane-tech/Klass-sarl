import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Klass Sarl — Atelier de métallerie & soudure à Edéa, Cameroun",
  description:
    "Klass Sarl, atelier de métallerie à Edéa (Littoral, Cameroun) : soudure, usinage, portails, garde-corps, structures métalliques sur mesure et pièces de rechange. Également Klass Pressing à Edéa pour l'entretien du linge.",
};

export default function HomePage() {
  return <HomeContent />;
}
