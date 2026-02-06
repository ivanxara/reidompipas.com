import Wrapper from "@/components/layout/wrapper";
import PageHeader from "@/components/shared/page-header";
import Heading2 from "@/components/ui/heading-2";
import Footer from "@/components/layout/footer";
import { arr, date } from "@/utils/generic";
import { MENUS, SOCIALS, CONTACTS, WHATSAPP } from "@/utils/constants";
import { createClient } from "@/lib/supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight, ScrollText, Star } from "lucide-react";

import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { faqPage } from "@/app/_seo/schema";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import FaqCollapsible from "@/components/shared/faq-collapsible";
import { FAQ_GLOBAL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Menu Executivo",
  description:
    "Menu executivo com diárias ao almoço em Oliveira de Azeméis. Pratos do dia atualizados.",
  keywords: [
    "menu executivo",
    "diárias",
    "almoço",
    "Oliveira de Azeméis",
    "restaurante",
  ],
  alternates: {
    canonical: "/menu-executivo",
  },
};

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("newMenus")
    .select("*, products(*, categories(*))")
    .eq("menuId", MENUS.DIARIAS.ID)
    .eq("status", true);

  // @ts-ignore
  let products = data.sort((a, b) => {
    const categoryIdA = a.products.categoryId;
    const categoryIdB = b.products.categoryId;
    const everydayA = a.everyday;
    const everydayB = b.everyday;

    const priorityA = categoryIdA === 14 ? 2 : everydayA ? 1 : 0;
    const priorityB = categoryIdB === 14 ? 2 : everydayB ? 1 : 0;

    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    return categoryIdA - categoryIdB;
  });

  products = arr.groupBy(products, "special");

  const currentDate = new Date();
  let updateDate =
    currentDate.getHours() < 10
      ? currentDate.setDate(currentDate.getDate() - 1)
      : currentDate;

  return (
    <>
      <Script
        id="ldjson-faq-menu-executivo"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqPage(FAQ_GLOBAL))}
      </Script>
      <Wrapper className="flex flex-col py-12 lg:py-20 min-h-screen">
        {/* Header */}
        <PageHeader subtitle="Almoço" title="Menu Executivo">
          <div className="flex items-center gap-4 mt-2">
            <div className="h-px w-8 bg-secondary/20"></div>
            <p className="font-inter text-secondary/60 text-sm uppercase tracking-widest">
              {date.formatExtensive(updateDate)}
            </p>
            <div className="h-px w-8 bg-secondary/20"></div>
          </div>
        </PageHeader>

        {/* Instagram Section (Top) */}
        <div className="flex flex-col items-center gap-6 text-center mb-16 max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <div className="flex flex-col gap-2">
            <h3 className="font-bellagia text-2xl text-secondary">
              Instagram Stories
            </h3>
            <p className="text-secondary/60 font-inter font-light">
              Siga-nos para ver os pratos do dia em tempo real.
            </p>
          </div>

          <Link href={SOCIALS.INSTAGRAM} target="_blank">
            <Button
              variant="outline"
              className="rounded-full px-8 h-12 border-secondary/20 text-secondary hover:bg-secondary hover:text-white transition-all gap-2 group"
            >
              <InstagramLogoIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Ver Stories</span>
            </Button>
          </Link>
        </div>

        {["Sunday"].includes(date.getWeekDay(new Date())) ? (
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8 p-12 border border-secondary/10 rounded-2xl bg-secondary/5">
            <Heading2 className="font-bellagia text-3xl">
              Fim de semana
            </Heading2>
            <span className="text-secondary/70 font-inter font-light text-lg leading-relaxed">
              Ao domingo não servimos o menu executivo. Aproveite para descobrir
              novas e deliciosas opções na nossa carta.
            </span>
            <Link href="/carta">
              <Button className="rounded-full px-8 h-12 bg-secondary text-white hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                <ScrollText className="size-4 mr-2" strokeWidth={1.5} />
                <span>Ver Carta</span>
              </Button>
            </Link>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {/* Banner Info */}
            <div className="bg-secondary text-primary-foreground py-4 px-6 rounded-t-2xl text-center shadow-lg relative z-10">
              <p className="font-bellagia text-lg md:text-xl tracking-wide font-light">
                Couvert + Sopa + Prato + Bebida + Café
              </p>
            </div>

            <div className="bg-white border border-secondary/10 border-t-0 rounded-b-2xl p-8 md:p-12 shadow-xl shadow-secondary/5">
              <div className="grid md:grid-cols-2 gap-16 relative">
                {/* Vertical Divider for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/10 to-transparent -translate-x-1/2"></div>

                {[
                  { label: "Especial", price: "12.00", key: "true" },
                  { label: "Económico", price: "9.00", key: "false" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b border-secondary/10 pb-4">
                      <div className="flex items-center gap-3">
                        {item.key === "true" && (
                          <Star className="text-primary fill-primary size-5" />
                        )}
                        <h3 className="font-bellagia text-2xl text-secondary">
                          {item.label}
                        </h3>
                      </div>
                      <span className="font-bellagia text-2xl text-secondary">
                        {item.price}€
                      </span>
                    </div>

                    <div className="flex flex-col gap-4 pl-2">
                      {/* @ts-ignore */}
                      {products[item.key] && products[item.key].length > 0 ? (
                        // @ts-ignore
                        products[item.key].map(
                          (productItem: any, idx: number) => (
                            <div
                              key={idx}
                              className="flex items-baseline gap-3 group"
                            >
                              <span className="h-1.5 w-1.5 min-w-[6px] rounded-full bg-primary/40 mt-2 group-hover:bg-primary transition-colors duration-300"></span>
                              <span className="text-lg font-light text-secondary/80 group-hover:text-secondary transition-colors duration-300">
                                {productItem.products.name === "Picanha"
                                  ? "Picanha (15€)"
                                  : productItem.products.name}
                              </span>
                            </div>
                          )
                        )
                      ) : (
                        <span className="text-secondary/40 italic font-light">
                          Sem pratos disponíveis hoje.
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </>
  );
}
