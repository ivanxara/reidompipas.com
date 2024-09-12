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
    <div className="w-full">
      <Wrapper>
        <Button variant="capsule" onClick={() => router.back()}>
          <ChevronLeft className="size-4" />
          <span>Voltar</span>
        </Button>
        <div className="flex flex-col">
          <Heading2 className="mt-4">{title}</Heading2>
          <span className="text-xs text-muted-foreground">
            Se o PDF não estiver disponível, clique no botão para fazer download
            do menu
          </span>
          <Button className="mt-2 w-fit">
            <a href={src} download>
              Download PDF
            </a>
          </Button>
        </div>
      </Wrapper>
      <iframe
        className="w-full h-[100vh] sm:h-screen mt-4"
        src={src}
        title="PDF Viewer"
        aria-label="PDF Viewer for the executive menu"
      />
    </div>
  );
}
