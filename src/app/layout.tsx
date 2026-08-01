import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import AnnouncementBar from "@/components/layout/announcement-bar";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import { fonts } from "@/assets/fonts/fonts";
import ReactQueryProvider from "@/providers/react-query";
import { Analytics } from "@vercel/analytics/react";
import FloatingWhatsapp from "@/components/shared/floating-whatsapp";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://reidompipas.com"),
  title: {
    default: "Rei Dom Pipas | Comida Tradicional Portuguesa",
    template: "%s | Rei Dom Pipas",
  },
  description:
    "Restaurante em Oliveira de Azeméis com cozinha tradicional portuguesa, diárias e menu executivo.",
  keywords: [
    "restaurante",
    "Oliveira de Azeméis",
    "São João da Madeira",
    "menu executivo",
    "diárias",
    "comida tradicional portuguesa",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Rei Dom Pipas",
    title: "Rei Dom Pipas | Comida Tradicional Portuguesa",
    description:
      "Restaurante em Oliveira de Azeméis com cozinha tradicional portuguesa, diárias e menu executivo.",
    locale: "pt_PT",
    url: "https://reidompipas.com/",
  },
  twitter: {
    card: "summary",
    title: "Rei Dom Pipas",
    description:
      "Cozinha tradicional portuguesa em Oliveira de Azeméis, diárias e menu executivo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="pt" className={cn(fonts.join(" "))}>
        <body className={cn(inter.className, "text-secondary")}>
          <Script
            id="ldjson-restaurant"
            type="application/ld+json"
            strategy="beforeInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Rei Dom Pipas",
              url: "https://reidompipas.com/",
              telephone: "+351256386200",
              address: {
                "@type": "PostalAddress",
                streetAddress: "R. dos Bombeiros Voluntários, Nº63 A",
                addressLocality: "Oliveira de Azeméis",
                postalCode: "3720-216",
                addressCountry: "PT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.8410671,
                longitude: -8.4799307,
              },
              servesCuisine: "Portuguese",
              priceRange: "€€",
              acceptsReservations: "True",
              menu: "https://reidompipas.com/carta",
              sameAs: ["https://www.instagram.com/reidompipas"],
            })}
          </Script>
          <AnnouncementBar />
          <Navbar />
          <FloatingWhatsapp />
          {children}
          <Analytics />
          <Footer />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
