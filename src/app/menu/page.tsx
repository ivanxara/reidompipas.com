"use client";

import Wrapper from "@/components/layout/wrapper";
import MenuBox from "@/components/shared/menu-box";
import Heading1 from "@/components/ui/heading-1";
import Heading2 from "@/components/ui/heading-2";
import { useQuery } from "@tanstack/react-query";
import { arr } from "@/utils/generic";
import { scrollToId } from "@/utils/scroll";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import { Baby, Beef, Book, Fish, Leaf, Salad } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

export default function Page() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const queryProducts = useQuery({
    queryKey: ["productsByCategory"],
    queryFn: async () => {
      const { data } = await supabase
        .from("products")
        .select("*, categories(*)");

      const productsByCategory = arr.groupBy(data, "categories.name");
      return productsByCategory;
    },
  });

  return (
    <div>
      <div className="fixed bottom-10 flex w-full items-center justify-center z-10 gap-4">
        <div className="px-4 py-2.5 bg-white shadow-custom-1 flex gap-2 items-center justify-center rounded-lg">
          {[
            {
              category: "Carnes",
              icon: Beef,
            },
            {
              category: "Peixe",
              icon: Fish,
            },
            {
              category: "Crianças",
              icon: Baby,
            },
            {
              category: "Saladas",
              icon: Leaf,
            },
            {
              category: "Vegetariano",
              icon: Salad,
            },
          ].map((item, index) => {
            return (
              <Button
                key={index}
                className="border border-secondary group hover:bg-secondary"
                variant="ghost"
                size={isDesktop ? "sm" : "xs"}
                onClick={() => scrollToId(item.category, isDesktop ? 140 : 100)}
              >
                <item.icon
                  className="size-4 text-secondary group-hover:text-primary-foreground"
                  strokeWidth={1.5}
                />
              </Button>
            );
          })}
        </div>
      </div>

      <Wrapper>
        <Heading1 className="pb-10">Menu</Heading1>
        {queryProducts.isSuccess && (
          <div className="flex flex-col gap-20">
            {Object.keys(queryProducts.data).map((category) => {
              const products = queryProducts.data[category];
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
        )}
      </Wrapper>
      <Footer className="!pb-32" />
    </div>
  );
}
