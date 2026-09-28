import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Klass Sarl — Métallerie & Pressing à Edéa, Cameroun",
  description:
    "Klass Sarl à Edéa (Littoral, Cameroun) : fabrication mécanique et usinage de pièces sur mesure, reproduction de pièces usées, poulies, arbres, pignons. Également Klass Pressing pour l'entretien du linge.",
};

export default function HomePage() {
  return <HomeContent />;
}
