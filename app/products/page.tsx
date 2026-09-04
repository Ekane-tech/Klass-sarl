import type { Metadata } from "next";
import { ProductsContent } from "@/components/pages/ProductsContent";

export const metadata: Metadata = {
  title: "Pièces de rechange — Atelier Métallerie",
  description:
    "L'atelier Klass Sarl à Edéa vend des pièces de rechange et consommables : gaines, lames de scie Arivan, disques, électrodes de soudure, paumelles et galets de portail.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
