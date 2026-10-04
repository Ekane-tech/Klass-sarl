import type { Metadata } from "next";
import { headers } from "next/headers";
import { I18nProvider } from "@/lib/i18n";
import { company } from "@/lib/translations";
import { translations } from "@/lib/translations";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

async function getLanguageFromHeaders(): Promise<"fr" | "en"> {
  try {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language") || "";
    if (acceptLanguage.toLowerCase().startsWith("en")) return "en";
  } catch {
    /* ignore */
  }
  return "fr";
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguageFromHeaders();
  const t = translations[lang];

  return {
    metadataBase: new URL(process.env.SITE_URL || "https://klasssarl.com"),
    title: {
      default: t.meta.title,
      template: `%s — Klass Sarl`,
    },
    description: t.meta.description,
    keywords: [
      "Klass Sarl",
      "métallerie Edéa",
      "soudure Cameroun",
      "atelier soudure Edéa",
      "portail Edéa",
      "garde-corps",
      "barreaux",
      "structures métalliques",
      "pièces de rechange Edéa",
      "ALUCAM",
      "pressing Edéa",
      "repassage",
      "Littoral Cameroun",
    ],
    authors: [{ name: company.name }],
    openGraph: {
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      alternateLocale: lang === "fr" ? "en_US" : "fr_FR",
      url: "/",
      siteName: company.name,
      title: t.meta.title,
      description: t.meta.description,
      images: [
        {
          url: "/images/og-logo.jpg",
          width: 800,
          height: 800,
          alt: t.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/images/og-logo.jpg"],
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Default to French for server-side rendering
  // Client-side I18nProvider will handle actual language detection
  const lang: "fr" | "en" = "fr";
  const t = translations[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description: t.meta.description,
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
    url: process.env.SITE_URL || "https://klasssarl.com",
  };

  return (
    <html lang={lang} className="antialiased" data-scroll-behavior="smooth">
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
