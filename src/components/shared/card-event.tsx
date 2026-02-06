import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function CardEvent({
  to,
  label,
  subLabel,
  image,
}: {
  to: string;
  label: string;
  subLabel: string;
  image: any;
}) {
  return (
    <Link
      href={to}
      className="group relative block h-[500px] w-full overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 z-0">
        <Image
          className="h-full w-full object-cover transition-transform duration-1000 will-change-transform group-hover:scale-110"
          src={image}
          alt={label}
          fill
        />
        {/* Gradient Overlay - Lighter at top, darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Hover Overlay Color */}
        <div className="absolute inset-0 bg-secondary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          {/* Decorative Line */}
          <div className="mb-6 w-12 h-0.5 bg-primary/80" />

          <h3 className="mb-4 font-bellagia text-3xl text-white md:text-4xl leading-tight drop-shadow-lg">
            {label}
          </h3>

          <p className="max-w-md font-inter text-base font-light leading-relaxed text-white/90 line-clamp-3 drop-shadow-md">
            {subLabel}
          </p>
          
          <div className="mt-8 flex items-center gap-2 text-primary opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="text-sm uppercase tracking-widest font-medium">Ver Detalhes</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Floating Icon Top Right */}
        <div className="absolute right-6 top-6 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <ArrowUpRight className="h-6 w-6" />
          </div>
        </div>
      </div>
    </Link>
  );
}
