import Wrapper from "@/components/layout/wrapper";
import PageHeader from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { breadcrumbList } from "@/app/_seo/schema";

export const metadata: Metadata = {
  title: "Restaurante em Oliveira de Azeméis",
  description:
    "Rei Dom Pipas é um restaurante em Oliveira de Azeméis com cozinha tradicional portuguesa, diárias e menu executivo.",
  keywords: [
    "restaurante em Oliveira de Azeméis",
    "diárias",
    "menu executivo",
    "cozinha tradicional portuguesa",
  ],
  alternates: {
    canonical: "/oliveira-de-azemeis",
  },
};

export default function Page() {
  return (
    <Wrapper className="py-12 lg:py-20">
      <Script
        id="ldjson-breadcrumb-oliveira"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(
          breadcrumbList([
            { name: "Início", item: "https://reidompipas.com/" },
            {
              name: "Oliveira de Azeméis",
              item: "https://reidompipas.com/oliveira-de-azemeis",
            },
          ])
        )}
      </Script>
      <PageHeader
        subtitle="Restaurantes"
        title="Restaurante em Oliveira de Azeméis"
        description="Cozinha tradicional portuguesa, ambiente acolhedor e atendimento de excelência."
      />

      <div className="max-w-3xl mx-auto flex flex-col gap-8 font-inter text-secondary/80">
        <p>
          O Rei Dom Pipas é um restaurante em Oliveira de Azeméis reconhecido
          pelas suas diárias ao almoço, menu executivo e uma carta repleta de
          sabores autênticos. A nossa missão é proporcionar uma experiência
          gastronómica única com pratos de qualidade e um serviço atencioso.
        </p>
        <p>
          Estamos localizados na R. dos Bombeiros Voluntários, Nº63 A, no centro
          de Oliveira de Azeméis, com estacionamento nas proximidades e fácil
          acesso.
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
