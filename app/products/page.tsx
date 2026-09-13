import type { Metadata } from "next";
import { FabricationContent } from "@/components/pages/FabricationContent";

export const metadata: Metadata = {
  title: "Usinage & fabrication métalliques — Atelier Klass Sarl Edéa",
  description:
    "Usinage et fabrication de pièces métalliques à Edéa : reproduction de pièces usées ou cassées, fabrication sur plan, pignons, arbres, poulies, vis et écrous. L'atelier vend aussi des pièces de rechange et consommables.",
};

export default function ProductsPage() {
  return <FabricationContent />;
}
