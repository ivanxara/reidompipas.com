import { cn } from "@/lib/utils";
import React from "react";

export default function Heading1({ children, className }: any) {
  return (
    <h1
      className={cn(
        "text-5xl uppercase text-secondary tracking-tighter",
        className
      )}
    >
      {children}
    </h1>
  );
}
