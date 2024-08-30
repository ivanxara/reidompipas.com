import { cn } from "@/lib/utils";
import { FacebookIcon } from "lucide-react";
import React from "react";

export default function LogoFacebook({ className }: any, props: any) {
  return (
    <FacebookIcon
      className={cn("size-8", className)}
      strokeWidth={1}
      {...props}
    />
  );
}
