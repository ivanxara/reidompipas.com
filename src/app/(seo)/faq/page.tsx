import Wrapper from "@/components/layout/wrapper";
import PageHeader from "@/components/shared/page-header";
import type { Metadata } from "next";
import Script from "next/script";
import { faqPage, breadcrumbList } from "@/app/_seo/schema";
import FaqCollapsible from "@/components/shared/faq-collapsible";
import { FAQ_GLOBAL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Perguntas frequentes sobre reservas, menu executivo, diárias, horários e serviços.",
  keywords: ["FAQ", "reservas", "menu executivo", "diárias", "horários"],
  alternates: { canonical: "/faq" },
};

export default function Page() {
  const faqs = FAQ_GLOBAL;

  return (
    <Wrapper className="py-12 lg:py-20">
      <Script
        id="ldjson-breadcrumb-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(
          breadcrumbList([
            { name: "Início", item: "https://reidompipas.com/" },
            { name: "FAQ", item: "https://reidompipas.com/faq" },
          ])
        )}
      </Script>
      <Script
        id="ldjson-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqPage(faqs))}
      </Script>
      <PageHeader
        subtitle="Ajuda"
        title="FAQ"
        description="Esclareça rapidamente as suas dúvidas mais comuns."
      />
      <div className="max-w-3xl mx-auto mt-8">
        <FaqCollapsible items={faqs} centered />
      </div>
    </Wrapper>
  );
}
