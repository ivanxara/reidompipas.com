import React from "react";
import Link from "next/link";

import WhatsappLogo from "@/assets/img/logo_whatsapp.svg";
import Image from "next/image";
import { WHATSAPP } from "@/utils/constants";

export default function FloatingWhatsapp() {
  const link = `${WHATSAPP}&text=Olá! Vim através do site e preciso de uma informação.`;

  return (
    <div className="fixed bottom-8 z-20 right-6 sm:right-8 md:right-12 lg:right-16 xl:right-20 hover:scale-105 transition-all">
      <button
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        className="shadow-custom-2 bg-[#25D366] animation-float size-16 grid place-items-center rounded-full ml-auto"
      >
        <Image className="size-8" src={WhatsappLogo} alt="whatsapp logo" />
      </button>
    </div>
  );
}
