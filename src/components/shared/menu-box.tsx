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
      <div className="flex items-start gap-4 font-inter text-secondary group">
        {product.image && (
          <Image
            draggable={false}
            alt={product.name}
            src={product.image}
            width={64}
            height={64}
            className="aspect-square object-cover rounded-md shadow-sm"
          />
        )}
        <div className="w-full text-sm">
          {/* label and price */}
          <div className="dots flex items-end justify-between gap-2 relative">
             <div className="relative flex w-full overflow-hidden items-baseline">
              <span className="whitespace-nowrap bg-background pr-2 font-medium tracking-wide text-secondary/90 group-hover:text-primary transition-colors duration-300">
                {product.name}
              </span>
              <span className="flex-grow border-b border-dotted border-secondary/30 mb-1.5 mx-1" />
            </div>
            
            <div className="flex items-center gap-3 bg-background pl-2 mb-0.5">
              <span className="whitespace-nowrap text-end font-bellagia text-base text-secondary">
                {product.price ? `${product.price.toFixed(2)}€` : ``}
              </span>
              {product.price2 && (
                <span className="whitespace-nowrap text-end font-bellagia text-base text-secondary">
                  {product.price2 ? `${product.price2.toFixed(2)}€` : ``}
                </span>
              )}
            </div>
          </div>
          {/* description */}
          {product.desc && (
            <div className="mt-1.5">
              <span className="text-sm text-secondary/60 font-light leading-relaxed">{product.desc}</span>
            </div>
          )}
          {/* tags */}
          {product.tags && (
            <Badge
              variant="outline"
              key={product.tags.name}
              className={cn(
                "rounded-full px-2 py-0 text-[10px] font-medium mt-2 border-primary/20 text-secondary/70 uppercase tracking-wider"
              )}
              style={product.tags.color ? { borderColor: product.tags.color, color: product.tags.color } : {}}
            >
              {product.tags.name}
            </Badge>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuBox;
