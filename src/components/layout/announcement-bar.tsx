"use client";

import { Clock, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Wrapper from "./wrapper";
import {
  ANNOUNCEMENT_HEIGHT_CLASS,
  useAnnouncement,
} from "@/hooks/use-announcement";

export default function AnnouncementBar() {
  const { visible, dismiss } = useAnnouncement();

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-[60] bg-primary text-secondary",
        ANNOUNCEMENT_HEIGHT_CLASS,
      )}
    >
      <Wrapper className="h-full flex items-center justify-center relative">
        <div className="flex items-center gap-2 px-10 sm:px-8 text-center leading-4 sm:text-sm sm:leading-normal font-medium tracking-wide whitespace-normal break-words sm:truncate">
          <Clock className="hidden sm:inline-flex w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span className="w-full font-bold">
            Encerrados até 6 de setembro. Reabrimos a 7 de setembro.
          </span>
        </div>
        <button
          onClick={dismiss}
          aria-label="Fechar aviso"
          className="absolute right-4 sm:right-6 p-1.5 -m-1.5 rounded-full hover:bg-secondary/10 active:bg-secondary/20 transition-colors z-10"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </Wrapper>
    </div>
  );
}
