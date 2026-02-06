import Wrapper from "@/components/layout/wrapper";
import PageHeader from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { breadcrumbList } from "@/app/_seo/schema";

export const metadata: Metadata = {
  title: "Restaurante perto de Ovar",
  description:
    "A poucos minutos de Ovar. Diárias e menu executivo com cozinha tradicional portuguesa.",
  keywords: ["restaurante Ovar", "perto de Ovar", "diárias", "menu executivo"],
  alternates: { canonical: "/ovar" },
};

export default function Page() {
  return (
    <Wrapper className="py-12 lg:py-20">
      <Script id="ldjson-breadcrumb-ovar" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(
          breadcrumbList([
            { name: "Início", item: "https://reidompipas.com/" },
            { name: "Ovar", item: "https://reidompipas.com/ovar" },
          ])
        )}
      </Script>
      <PageHeader
        subtitle="Restaurantes"
        title="Restaurante perto de Ovar"
        description="A poucos minutos de Ovar, com diárias e menu executivo."
      />
      <div className="max-w-3xl mx-auto flex flex-col gap-8 font-inter text-secondary/80">
        <p>
          Para quem está em Ovar, o Rei Dom Pipas em Oliveira de Azeméis é uma
          opção próxima para refeições de qualidade e ambiente acolhedor.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/reservas">
            <Button className="rounded-full h-12 px-8 bg-secondary text-white">
              Reservar Mesa
            </Button>
          </Link>
          <Link href="/menu-executivo">
            <Button variant="outline" className="rounded-full h-12 px-8 border-secondary text-secondary">
              Ver Menu Executivo
            </Button>
          </Link>
          <Link href="/carta">
            <Button variant="ghost" className="rounded-full h-12 px-8 border border-secondary text-secondary">
              Ver Carta
            </Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
