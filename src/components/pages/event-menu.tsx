"use client";

import Wrapper from "@/components/layout/wrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Heading1 from "../ui/heading-1";
import Heading2 from "../ui/heading-2";

export default function EventMenu({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  const router = useRouter();
  return (
    <iframe
      style={{ position: "absolute", left: 0, top: 0 }}
      width="100%"
      height="100%"
      src="https://reidompipas.com/files/menu-executivo.pdf"
    />
  );
}
