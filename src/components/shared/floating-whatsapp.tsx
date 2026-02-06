import React from "react";
import Link from "next/link";

import CarnavalMask from "@/assets/img/carnival-mask.png";
import WhatsappLogo from "@/assets/img/logo_whatsapp.svg";
import Image from "next/image";
import { WHATSAPP } from "@/utils/constants";

export default function FloatingWhatsapp() {
  const link = `${WHATSAPP}&text=Olá! Vim através do site e preciso de uma informação.`;

  return (
    <div className="fixed flex items-center gap-2 bottom-8 z-20 right-6 sm:right-8 md:right-12 lg:right-16 xl:right-20">
      <Link
        href="/eventos/carnaval"
        target="_blank"
        className="hover:scale-105 transition-all"
      >
        <button className="shadow-custom-2 bg-[#E6C84F] animation-float size-16 grid place-items-center rounded-full ml-auto">
          <Image className="size-8" src={CarnavalMask} alt="whatsapp logo" />
        </button>
      </Link>
      <Link
        href={link}
        target="_blank"
        className="hover:scale-105 transition-all"
      >
        <button className="shadow-custom-2 bg-[#25D366] animation-float size-16 grid place-items-center rounded-full ml-auto">
          <Image className="size-8" src={WhatsappLogo} alt="whatsapp logo" />
        </button>
      </Link>
    </div>
  );
}
