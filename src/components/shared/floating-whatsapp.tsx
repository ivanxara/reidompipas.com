"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CarnavalMask from "@/assets/img/carnival-mask.png";
import WhatsappLogo from "@/assets/img/logo_whatsapp.svg";
import Image from "next/image";
import { WHATSAPP } from "@/utils/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function FloatingWhatsapp() {
  const link = `${WHATSAPP}&text=Olá! Vim através do site e preciso de uma informação.`;

  const buttons = [
    // {
    //   id: "carnaval",
    //   href: "/eventos/carnaval",
    //   icon: CarnavalMask,
    //   color: "bg-[#E6C84F]",
    //   label: "Menu Carnaval",
    //   delay: 0.1,
    // },
    {
      id: "whatsapp",
      href: link,
      icon: WhatsappLogo,
      color: "bg-[#25D366]",
      label: "Fale Connosco",
      delay: 0,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <TooltipProvider delayDuration={100}>
        {buttons.map((btn) => (
          <Tooltip key={btn.id}>
            <TooltipTrigger asChild>
              <Link href={btn.href} target="_blank">
                <motion.button
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: btn.delay,
                  }}
                  className={`relative flex items-center justify-center size-14 md:size-16 rounded-full shadow-lg hover:shadow-xl transition-shadow ${btn.color}`}
                >
                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                  >
                    <Image
                      src={btn.icon}
                      alt={btn.label}
                      className="size-7 md:size-8 object-contain"
                    />
                  </motion.div>
                </motion.button>
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="bg-secondary text-primary-foreground border-none px-4 py-2 font-bellagia text-sm tracking-wide mr-2"
            >
              <p>{btn.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
