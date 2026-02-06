import Wrapper from "@/components/layout/wrapper";
import PageHeader from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { breadcrumbList } from "@/app/_seo/schema";

export const metadata: Metadata = {
  title: "Restaurante perto de São João da Madeira",
  description:
    "Estamos a poucos minutos de São João da Madeira. Diárias e menu executivo com cozinha tradicional portuguesa.",
  keywords: [
    "restaurante São João da Madeira",
    "perto de São João da Madeira",
    "diárias",
    "menu executivo",
  ],
  alternates: {
    canonical: "/sao-joao-da-madeira",
  },
};

export default function Page() {
  return (
    <Wrapper className="py-12 lg:py-20">
      <Script id="ldjson-breadcrumb-sjm" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(
          breadcrumbList([
            { name: "Início", item: "https://reidompipas.com/" },
            {
              name: "São João da Madeira",
              item: "https://reidompipas.com/sao-joao-da-madeira",
            },
          ])
        )}
      </Script>
      <PageHeader
        subtitle="Restaurantes"
        title="Restaurante perto de São João da Madeira"
        description="Apenas a alguns minutos de São João da Madeira, com diárias e menu executivo."
      />

      <div className="max-w-3xl mx-auto flex flex-col gap-8 font-inter text-secondary/80">
        <p>
          O Rei Dom Pipas fica a poucos minutos de São João da Madeira, em
          Oliveira de Azeméis. Recebemos diariamente clientes desta cidade que
          procuram uma refeição caseira, rápida e saborosa, seja nas nossas
          diárias ao almoço, no menu executivo ou na carta completa.
        </p>
        <p>
          Se vem de São João da Madeira, encontra-nos facilmente na R. dos
          Bombeiros Voluntários, Nº63 A. Temos ambiente acolhedor e serviço
          atencioso para almoços de trabalho, jantares em família e ocasiões
          especiais.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/reservas">
            <Button className="rounded-full h-12 px-8 bg-secondary text-white">
              Reservar Mesa
            </Button>
          </Link>
          <Link href="/menu-executivo">
            <Button
              variant="outline"
              className="rounded-full h-12 px-8 border-secondary text-secondary"
            >
              Ver Menu Executivo
            </Button>
          </Link>
          <Link href="/carta">
            <Button
              variant="ghost"
              className="rounded-full h-12 px-8 border border-secondary text-secondary"
            >
              Ver Carta
            </Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
