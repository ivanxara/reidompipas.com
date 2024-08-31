import { cn } from "@/lib/utils";
import React from "react";

export default function Wrapper({ children, className }: any) {
  return (
    <div className={cn("px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20", className)}>
      {children}
    </div>
  );
}
