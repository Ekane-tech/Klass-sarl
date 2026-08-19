import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "À propos — Klass Sarl",
  description:
    "Klass Sarl est une entreprise d'Edéa (Littoral, Cameroun) qui fédère plusieurs petits métiers : Klass Pressing et un atelier de métallerie, soudure et fabrications métalliques.",
};

export default function AboutPage() {
  return <AboutContent />;
}
