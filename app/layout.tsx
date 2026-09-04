import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { company } from "@/lib/translations";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://klass-sarl.vercel.app"),
  title: {
    default: "Klass Sarl — Pressing & Métallerie à Edéa",
    template: "%s — Klass Sarl",
  },
  description:
    "Klass Sarl à Edéa (Littoral, Cameroun) : Klass Pressing pour l'entretien du linge et un atelier de métallerie, soudure, portails, garde-corps et structures métalliques sur mesure.",
  keywords: [
    "Klass Sarl",
    "pressing Edéa",
    "métallerie Edéa",
    "soudure Cameroun",
    "portail Edéa",
    "garde-corps",
    "barreaux",
    "structures métalliques",
    "laverie Edéa",
    "repassage",
    "Littoral Cameroun",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: "/",
    siteName: company.name,
    title: "Klass Sarl — Pressing & Métallerie à Edéa",
    description:
      "Pressing, métallerie, soudure, portails et structures métalliques sur mesure à Edéa, Cameroun.",
    images: [
      {
        url: "/images/klass-sarl-logo.png",
        width: 1200,
        height: 630,
        alt: "Klass Sarl — Pressing & Métallerie à Edéa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klass Sarl — Pressing & Métallerie à Edéa",
    description:
      "Pressing, métallerie, soudure, portails et structures métalliques sur mesure à Edéa, Cameroun.",
    images: ["/images/klass-sarl-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description:
      "Klass Pressing (entretien du linge) et atelier de métallerie (soudure, portails, garde-corps, structures métalliques) à Edéa.",
    email: company.email,
    telephone: company.phones[0],
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "713",
      addressLocality: "Edéa",
      addressRegion: "Littoral",
      addressCountry: "CM",
    },
    areaServed: "Littoral, Cameroun",
    openingHours: "Mo-Sa 07:30-19:00",
    priceRange: "$$",
    url: process.env.SITE_URL || "https://klass-sarl.vercel.app",
  };

  return (
    <html lang="fr" className="antialiased" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>
          <Header />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
          <ScrollToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
