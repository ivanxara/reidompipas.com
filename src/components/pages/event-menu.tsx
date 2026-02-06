"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Download } from "lucide-react";

import Wrapper from "@/components/layout/wrapper";
import { Button } from "@/components/ui/button";
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
        {/* Top navigation */}
        <Button
          variant="capsule"
          size="lg"
          onClick={() => router.back()}
          className="flex items-center gap-2"
          aria-label="Voltar à página anterior"
        >
          <ChevronLeft className="size-5" />
          <span>Voltar</span>
        </Button>

        {/* Header */}
        <div className="mt-6 flex flex-col gap-3">
          <Heading2>{title}</Heading2>

          <p className="text-sm sm:text-base text-muted-foreground max-w-prose">
            Se o menu não abrir corretamente ou não mostrar todas as páginas no
            seu telemóvel, utilize o botão abaixo para descarregar o PDF.
          </p>

          {/* Download button – primary action */}
          <Button
            size="lg"
            className="w-full sm:w-fit flex items-center gap-2"
            aria-label="Descarregar menu em PDF"
          >
            <a href={src} download className="flex items-center gap-2">
              <Download className="size-5" />
              Descarregar menu em PDF
            </a>
          </Button>
        </div>
      </Wrapper>

      {/* PDF Viewer */}
      <div className="mt-6 w-full">
        <iframe
          src={src}
          title="Visualização do menu em PDF"
          className="
            w-full
            h-[80vh]
            sm:h-screen
            border-t
            border-border
          "
        />
      </div>
    </div>
  );
}
