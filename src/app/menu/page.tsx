import Wrapper from "@/components/layout/wrapper";
import MenuBox from "@/components/shared/menu-box";
import Heading1 from "@/components/ui/heading-1";
import Heading2 from "@/components/ui/heading-2";
import { supabase } from "@/lib/supabase";
import Footer from "@/components/layout/footer";
import { Baby, Beef, Fish, Leaf, Salad } from "lucide-react";
import { Button } from "@/components/ui/button";
import { arr } from "@/utils/generic";
import ClientSideMenu from "./client-menu";

export default async function Page() {
  // Fetch data on the server side
  const { data } = await supabase.from("products").select("*, categories(*)");
  const productsByCategory = arr.groupBy(data, "categories.name");

  return (
    <div>
      {/* Client-side component for menu and scroll behavior */}
      <ClientSideMenu />

      <Wrapper>
        <Heading1 className="pb-10">Menu</Heading1>
        <div className="flex flex-col gap-20">
          {Object.keys(productsByCategory).map((category) => {
            const products = productsByCategory[category];
            return (
              <div
                id={category}
                key={category}
                className="flex w-full flex-col"
              >
                <Heading2>{category}</Heading2>
                <div className="mt-6 grid w-full grid-cols-1 gap-x-20 gap-y-10 sm:grid-cols-2">
                  {products.map((product: any, index: number) => (
                    <MenuBox key={index} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
      <Footer className="!pb-32" />
    </div>
  );
}
