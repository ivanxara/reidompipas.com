"use client";

import Wrapper from "@/components/layout/wrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function EventMenu({ src }: { src: string }) {
  const router = useRouter();
  return (
    <div className="w-full">
      <Wrapper>
        <Button onClick={() => router.back()}>
          <ChevronLeft className="size-4 mr-2" />
          <span>Voltar</span>
        </Button>
      </Wrapper>
      <iframe
        className="w-full h-[80vh] sm:h-screen mt-4"
        src={src}
        title="PDF Viewer"
        aria-label="PDF Viewer for the executive menu"
      />
    </div>
  );
}
