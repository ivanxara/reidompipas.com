import Wrapper from "@/components/layout/wrapper";
import Heading1 from "@/components/ui/heading-1";
import Heading2 from "@/components/ui/heading-2";
import Footer from "@/components/layout/footer";
import { arr, date } from "@/utils/generic";
import { MENUS } from "@/utils/constants";
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
import { Star } from "lucide-react";
import FloatingWhatsapp from "@/components/shared/floating-whatsapp";

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

  return (
    <>
      {/* <FloatingWhatsapp /> */}
      <Wrapper className="flex flex-col">
        <Heading1>Menu Executivo</Heading1>
        <Heading2 className="text-sm">
          Esta página é atualizada diariamente, de segunda a sexta-feira, com os
          pratos do dia. <br />
          Última atualização: {date.formatExtensive(new Date())}
        </Heading2>
        {/* Instagram */}
        <div className="flex flex-col gap-1 mt-10">
          <div className="">
            Também pode seguir-nos no Instagram, onde partilhamos diariamente os
            pratos do dia nos stories.
          </div>
          <Button variant="capsule" className="w-fit">
            <InstagramLogoIcon />
            <span>Abrir Instagram</span>
          </Button>
        </div>
        {/*  */}
        <div className="flex flex-col mt-10">
          <Heading2 className="flex items-center gap-2">
            <Star className="text-primary fill-primary size-4 mt-0.5" />
            <span>Exclusivo</span>
          </Heading2>
          <div className="flex flex-col gap-2 mt-4">
            {/* @ts-ignore */}
            {products.true.map((item: any, index: number) => (
              <span key={index}>{item.products.name}</span>
            ))}
            <span className="text-xs">- 12,5 €</span>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <Heading2 className="flex items-center gap-2">Econômico</Heading2>
          <div className="flex flex-col gap-2 mt-4">
            {/* @ts-ignore */}
            {products.false.map((item: any, index: number) => (
              <span key={index}>{item.products.name}</span>
            ))}
            <span className="text-xs">- 8,5 €</span>
          </div>
        </div>
      </Wrapper>
      <Footer className="!pb-32" />
    </>
  );
}
