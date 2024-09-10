import Image from "next/image";
import React from "react";

import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const MenuBox = ({ product = {} }: any) => {
  if (product.name.includes("teste")) {
    console.log({ product });
  }

  return (
    <>
      <div className="flex items-start gap-4 font-avenir font-light text-black">
        {product.image && (
          <Image
            draggable={false}
            alt={product.name}
            src={product.image}
            width={56}
            height={56}
            className="aspect-square object-cover"
          />
        )}
        <div className="w-full text-xs ">
          {/* label and price */}
          <div className="dots flex items-center justify-between gap-2">
            <div className="relative flex w-full bg-inherit">
              <span className="whitespace-nowrap bg-background pr-2">
                {product.name}
              </span>
              {product.price && (
                <div className="absolute z-[-1] flex h-full w-full items-end justify-end overflow-hidden tracking-[3px]">
                  ................................................................................................................................................
                </div>
              )}
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-10 whitespace-nowrap text-end">
                {product.price ? `${product.price.toFixed(2)} €` : ``}
              </span>
              {product.price2 && (
                <span className="w-10 whitespace-nowrap text-end">
                  {product.price2 ? `${product.price2.toFixed(2)} €` : ``}
                </span>
              )}
            </div>
          </div>
          {/* description */}
          {product.desc && (
            <div className="mt-1">
              <span className="text-pretty text-black/70">{product.desc}</span>
            </div>
          )}
          {/* tags */}
          {/* {product.tags && (
            <div className="mt-2 flex gap-2">
              {product.tags.map((tag: any) => {
                return (
                  <Badge
                    variant="tag"
                    key={tag.name}
                    className={cn(
                      "rounded-none p-0 px-2 text-[8px] font-light text-white",
                      tag.color
                    )}
                  >
                    {tag.name}
                  </Badge>
                );
              })}
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default MenuBox;
