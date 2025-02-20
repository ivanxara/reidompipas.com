import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import { fonts } from "@/assets/fonts/fonts";
import ReactQueryProvider from "@/providers/react-query";
import { Analytics } from "@vercel/analytics/react";
import Confetti from "@/components/confeti";
import FloatingWhatsapp from "@/components/shared/floating-whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rei Dom Pipas | Comida Tradicional Portuguesa",
  description: "Restaurante de Oliveira de Azeméis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en" className={cn(fonts.join(" "))}>
        <body className={cn(inter.className, "text-secondary")}>
          <Navbar />
          <FloatingWhatsapp />
          {children}
          <Analytics />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
