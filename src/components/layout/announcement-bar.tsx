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
        <div className="flex items-center gap-2 px-8 text-center text-sm font-medium tracking-wide truncate">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span>
            Também abertos ao jantar todos os dias, de 3 a 15 de agosto
          </span>
        </div>
        <button
          onClick={dismiss}
          aria-label="Fechar aviso"
          className="absolute right-4 sm:right-6 p-1.5 -m-1.5 rounded-full hover:bg-secondary/10 active:bg-secondary/20 transition-colors"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </Wrapper>
    </div>
  );
}
