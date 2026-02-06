import Wrapper from "@/components/layout/wrapper";
import { EVENTS } from "@/utils/constants";
import CardEvent from "@/components/shared/card-event";
import PageHeader from "@/components/shared/page-header";
import type { Metadata } from "next";

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
