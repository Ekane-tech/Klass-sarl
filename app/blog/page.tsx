import type { Metadata } from "next";
import { BlogContent } from "@/components/pages/BlogContent";

export const metadata: Metadata = {
  title: "Blog — Klass Sarl",
  description:
    "Conseils d'entretien du linge, astuces de métallerie et actualités de Klass Sarl à Edéa, Cameroun.",
};

export default function BlogPage() {
  return <BlogContent />;
}
