import Wrapper from "@/components/layout/wrapper";
import PageHeader from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { breadcrumbList } from "@/app/_seo/schema";

export const metadata: Metadata = {
  title: "Restaurante perto de Vale de Cambra",
  description:
    "A poucos minutos de Vale de Cambra. Diárias e menu executivo com cozinha tradicional portuguesa.",
  keywords: [
    "restaurante Vale de Cambra",
    "perto de Vale de Cambra",
    "diárias",
    "menu executivo",
  ],
  alternates: { canonical: "/vale-de-cambra" },
};

export default function Page() {
  return (
    <Wrapper className="py-12 lg:py-20">
      <Script id="ldjson-breadcrumb-cambra" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(
          breadcrumbList([
            { name: "Início", item: "https://reidompipas.com/" },
            {
              name: "Vale de Cambra",
              item: "https://reidompipas.com/vale-de-cambra",
            },
          ])
        )}
      </Script>
      <PageHeader
        subtitle="Restaurantes"
        title="Restaurante perto de Vale de Cambra"
        description="A poucos minutos de Vale de Cambra, com diárias e menu executivo."
      />
      <div className="max-w-3xl mx-auto flex flex-col gap-8 font-inter text-secondary/80">
        <p>
          O Rei Dom Pipas é uma opção próxima para quem está em Vale de Cambra
          e procura um almoço de trabalho ou um jantar em ambiente acolhedor.
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
