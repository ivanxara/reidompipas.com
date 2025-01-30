import Wrapper from "@/components/layout/wrapper";
import Heading1 from "@/components/ui/heading-1";
import Heading2 from "@/components/ui/heading-2";
import Footer from "@/components/layout/footer";
import { arr, date } from "@/utils/generic";
import { MENUS, SOCIALS } from "@/utils/constants";
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
import FloatingWhatsapp from "@/components/shared/floating-whatsapp";
import Link from "next/link";

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
      <FloatingWhatsapp />
      <Wrapper className="flex flex-col">
        {/* Heading */}
        <Heading1>Menu Executivo</Heading1>
        <Heading2 className="text-sm mt-2">
          Esta página é atualizada diariamente, de segunda a sexta-feira, com os
          pratos do dia. <br /> Última atualização:{" "}
          {date.formatExtensive(updateDate)}
        </Heading2>
        {/* Instagram */}
        <div className="flex flex-col gap-2 mt-10">
          <Heading2>Instagram Stories</Heading2>
          <span>
            Também pode seguir-nos no Instagram, onde partilhamos diariamente os
            pratos do dia nos stories.
          </span>
          <Link href={SOCIALS.INSTAGRAM} target="_blank">
            <Button variant="capsule" className="w-fit">
              <InstagramLogoIcon />
              <span>Abrir Instagram</span>
            </Button>
          </Link>
        </div>
        {["Sunday", "Saturday"].includes(date.getWeekDay(new Date())) ? (
          <div className="mt-10 flex flex-col gap-1">
            <Heading2>Fim de semana</Heading2>
            <span>
              Durante o fim de semana não servimos o menu executivo. Aproveite
              para descobrir novas e deliciosas opções na nossa carta.
            </span>
            <Link href="/carta" target="_blank">
              <Button variant="capsule" className="w-fit">
                <ScrollText className="size-4" strokeWidth={1.5} />
                <span>Abrir Carta</span>
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <Heading1 className="mt-10">
              Couvert + Sopa + Prato + Bebida + Café
            </Heading1>
            <div className="mt-10">
              {/* <Heading2 className="flex items-center gap-2">Menu</Heading2> */}
              <div className="flex flex-col mt-4 md:flex-row-reverse md:justify-end md:gap-x-40 gap-y-10">
                {[
                  { label: "Especial", price: "11.50", key: "true" },
                  { label: "Económico", price: "8.50", key: "false" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <Heading2 className="flex  items-center gap-2">
                      {item.key === "true" && (
                        <Star className="text-primary fill-primary size-4 mt-0.5" />
                      )}
                      <span>
                        {item.label} - {item.price} €
                      </span>
                    </Heading2>
                    <div className="flex flex-col gap-1.5">
                      {/* @ts-ignore */}
                      {products[item.key].map((item: any, index: number) => (
                        <span key={index}>{item.products.name}</span>
                      ))}
                      {/* <span className="text-xs">- {item.price} €</span> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </Wrapper>
      <Footer className="!pb-32" />
    </>
  );
}
