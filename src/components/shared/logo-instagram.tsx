import { cn } from "@/lib/utils";
import { InstagramIcon } from "lucide-react";
import React from "react";

export default function LogoInstagram({ className }: any, props: any) {
  return (
    <InstagramIcon
      className={cn("size-8", className)}
      strokeWidth={1}
      {...props}
    />
  );
}
