import Wrapper from "@/components/layout/wrapper";
import PageHeader from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { breadcrumbList } from "@/app/_seo/schema";

export const metadata: Metadata = {
  title: "Restaurante perto de Santa Maria da Feira",
  description:
    "A poucos minutos de Santa Maria da Feira. Diárias e menu executivo com cozinha tradicional portuguesa.",
  keywords: [
    "restaurante Santa Maria da Feira",
    "perto de Santa Maria da Feira",
    "diárias",
    "menu executivo",
  ],
  alternates: { canonical: "/santa-maria-da-feira" },
};

export default function Page() {
  return (
    <Wrapper className="py-12 lg:py-20">
      <Script id="ldjson-breadcrumb-feira" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(
          breadcrumbList([
            { name: "Início", item: "https://reidompipas.com/" },
            {
              name: "Santa Maria da Feira",
              item: "https://reidompipas.com/santa-maria-da-feira",
            },
          ])
        )}
      </Script>
      <PageHeader
        subtitle="Restaurantes"
        title="Restaurante perto de Santa Maria da Feira"
        description="A poucos minutos de Santa Maria da Feira, com diárias e menu executivo."
      />
      <div className="max-w-3xl mx-auto flex flex-col gap-8 font-inter text-secondary/80">
        <p>
          Em Oliveira de Azeméis, o Rei Dom Pipas recebe muitos clientes de
          Santa Maria da Feira que procuram refeições caseiras e rápidas ao
          almoço, e uma carta completa para jantares.
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
