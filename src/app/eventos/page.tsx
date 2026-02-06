import Wrapper from "@/components/layout/wrapper";
import { EVENTS } from "@/utils/constants";
import CardEvent from "@/components/shared/card-event";
import PageHeader from "@/components/shared/page-header";
import type { Metadata } from "next";
import Script from "next/script";
import { breadcrumbList, faqPage } from "@/app/_seo/schema";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Organizamos eventos, casamentos e celebrações com menus especiais em Oliveira de Azeméis.",
  keywords: [
    "eventos",
    "casamentos",
    "celebrações",
    "Oliveira de Azeméis",
    "restaurante",
  ],
  alternates: {
    canonical: "/eventos",
  },
};

export default function Page() {
  return (
    <Wrapper className="py-12 lg:py-20">
      <Script
        id="ldjson-breadcrumb-eventos"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(
          breadcrumbList([
            { name: "Início", item: "https://reidompipas.com/" },
            { name: "Eventos", item: "https://reidompipas.com/eventos" },
          ])
        )}
      </Script>
      <Script
        id="ldjson-faq-eventos"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(
          faqPage([
            {
              question: "Organizam eventos e celebrações?",
              answer:
                "Sim, realizamos casamentos, batizados e eventos corporativos com menus especiais.",
            },
            {
              question: "Posso solicitar uma proposta?",
              answer:
                "Sim, contacte-nos para uma proposta personalizada conforme a sua necessidade.",
            },
            {
              question: "Têm menus para grupos?",
              answer:
                "Dispomos de menus ajustados para grupos, mediante reserva antecipada.",
            },
          ])
        )}
      </Script>
      <PageHeader
        className="mb-20"
        subtitle="Celebrações"
        title="Eventos"
        description="O ambiente perfeito para casamentos, batizados e eventos corporativos."
      />

      <div className="grid gap-y-12 sm:gap-x-12 md:grid-cols-2 lg:gap-x-16">
        {EVENTS.map((item: any, index) => (
          <div
            key={index}
            className="group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardEvent {...item} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
