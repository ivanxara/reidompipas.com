"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { scrollToId } from "@/utils/scroll";
import { Baby, Beef, Fish, Leaf, Salad } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClientSideMenu() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
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
  );
}
