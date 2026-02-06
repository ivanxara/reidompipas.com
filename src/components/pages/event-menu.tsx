"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Download } from "lucide-react";

import Wrapper from "@/components/layout/wrapper";
import { Button } from "@/components/ui/button";

export default function EventMenu({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-background">
      <Wrapper className="py-8 lg:py-12">
        {/* Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="md:w-[202px]">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="group pl-0 hover:pl-2 transition-all duration-300 text-secondary hover:bg-transparent self-start md:self-auto"
              aria-label="Voltar à página anterior"
            >
              <ChevronLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="uppercase tracking-widest text-xs font-medium">
                Voltar
              </span>
            </Button>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-primary text-xs tracking-[0.2em] uppercase mb-2">
              Eventos
            </span>
            <h1 className="font-bellagia text-3xl md:text-5xl text-secondary leading-none">
              {title}
            </h1>
          </div>

          <Button
            className="rounded-full bg-secondary text-white hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg w-full md:w-auto"
            asChild
            size="lg"
          >
            <a
              href={src}
              download
              className="flex items-center gap-2 justify-center"
            >
              <Download className="size-4" />
              <span>Descarregar PDF</span>
            </a>
          </Button>
        </div>

        <div className="text-center mb-6 px-4 animate-in fade-in duration-700 delay-100">
          <p className="text-xs text-secondary/50 leading-relaxed">
            Se o menu não abrir corretamente no seu telemóvel, utilize o botão
            acima para descarregar o PDF.
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="w-full bg-white p-2 md:p-4 rounded-2xl shadow-xl shadow-secondary/5 border border-secondary/10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <iframe
            src={src}
            title={`Menu - ${title}`}
            className="w-full h-[70vh] md:h-[85vh] rounded-xl bg-gray-50 border border-secondary/5"
          />
        </div>
      </Wrapper>
    </div>
  );
}
