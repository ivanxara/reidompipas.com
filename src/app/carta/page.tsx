import Wrapper from "@/components/layout/wrapper";
import MenuBox from "@/components/shared/menu-box";
import Heading2 from "@/components/ui/heading-2";
import PageHeader from "@/components/shared/page-header";
import Footer from "@/components/layout/footer";
import { arr } from "@/utils/generic";
import { MENUS } from "@/utils/constants";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import Script from "next/script";
import { breadcrumbList } from "@/app/_seo/schema";

export const metadata: Metadata = {
  title: "Carta",
  description:
    "Explore a nossa carta com pratos tradicionais portugueses. Opções para todos os gostos.",
  keywords: ["carta", "menu", "pratos", "restaurante", "Oliveira de Azeméis"],
  alternates: {
    canonical: "/carta",
  },
};

export default async function Page() {
  const supabase = await createClient();
  const [
    { data: menuData, error: menuError },
    { data: categories, error: categoriesError },
  ] = await Promise.all([
    supabase
      .from("newMenus")
      .select("*, products(*, categories(*), tags(*))")
      .eq("menuId", MENUS.MENU.ID)
      .eq("status", true)
      .order("order", { ascending: true }),
    supabase.from("categories").select().eq("status", true).order("order"),
  ]);

  if (menuError || categoriesError || !menuData || !categories) {
    console.log({ menuError });
    console.log({ categoriesError });
    return;
  }

  const products = menuData.flatMap((item) => item.products);

  const productsByCategory = arr.groupBy(products, "categories.name");

  const sortedProductsByCategory = categories.reduce((obj, category) => {
    const categoryName = category.name;
    if (productsByCategory[categoryName]) {
      obj[categoryName] = productsByCategory[categoryName];
    }
    return obj;
  }, {});

  return (
    <>
      <Script
        id="ldjson-breadcrumb-carta"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(
          breadcrumbList([
            { name: "Início", item: "https://reidompipas.com/" },
            { name: "Carta", item: "https://reidompipas.com/carta" },
          ])
        )}
      </Script>
      <Wrapper className="flex flex-col py-12 lg:py-20">
        <PageHeader
          subtitle="O Nosso Menu"
          title="Carta"
          description="Uma seleção cuidada dos melhores sabores da cozinha tradicional portuguesa."
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-6 text-xs sm:text-sm font-inter font-light text-secondary/50 bg-secondary/5 px-6 py-4 sm:py-2 rounded-xl sm:rounded-full border border-secondary/10">
            <span>Preços apresentados:</span>
            <div className="flex items-center gap-2">
              <span className="font-medium text-secondary">1º Preço:</span> 1
              Pessoa
            </div>
            <div className="w-px h-3 bg-secondary/20 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-secondary">2º Preço:</span> 2
              Pessoas
            </div>
          </div>
        </PageHeader>

        <div className="flex flex-col gap-24">
          {Object.entries(sortedProductsByCategory).map(
            ([category, products]: any) => (
              <div
                id={category}
                key={category}
                className="flex w-full flex-col"
              >
                <div className="flex items-end gap-6 mb-10 border-b border-secondary/10 pb-4">
                  <h2 className="font-bellagia text-3xl md:text-4xl text-secondary">
                    {category}
                  </h2>
                </div>

                <div className="grid w-full grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
                  {products.map((product: any, index: number) => (
                    <MenuBox key={index} product={product} />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </Wrapper>
    </>
  );
}
