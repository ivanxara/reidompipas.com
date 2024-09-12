"use client";

import { Check, Clipboard, Copy } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { sleep } from "@/utils/generic";

export default function CopyText({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text).then(async () => {
      setIsCopied(true);
      await sleep(1000);
      setIsCopied(false);
    });
  };

  // <Button onClick={copy} className={cn("gap-2")} variant="secondary">
  //   {/* <span>{isCopied ? "Copiado" : "Copiar"}</span> */}
  //   {isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
  // </Button>
  return (
    <div className="rounded-md w-full border border-input bg-primary-foreground px-3 py-2 text-sm relative flex items-center">
      {text}
      <button
        onClick={copy}
        className="absolute right-3 flex items-center gap-2 text-xs"
      >
        {isCopied ? (
          <Button size="xs" className="gap-2 text-xs" variant="ghost">
            <Check className="size-4" />
            <span className="hidden sm:block">Copiado</span>
          </Button>
        ) : (
          <Button size="xs" className="gap-2 text-xs" variant="ghost">
            <Copy className="size-4" />
            <span className="hidden sm:block">Copiar</span>
          </Button>
        )}
      </button>
    </div>
  );
}
