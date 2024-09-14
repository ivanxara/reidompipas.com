import { cn } from "@/lib/utils";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Clipboard, FacebookIcon, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import Wrapper from "./wrapper";
import Image from "next/image";
import { Button } from "../ui/button";
import { CONTACTS, EMAIL, GOOGLE_MAPS } from "@/utils/constants";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import CopyText from "../shared/copy-text";

export default function Footer({ className }: any) {
  return (
    <>
      <Wrapper className={cn("py-20 md:py-28", className)}>
        <div className="grid gap-y-4 xl:grid-flow-col text-secondary">
          <div className="md:row-span-2 md:pr-28">
            <div className="mb-10 flex max-h-10 gap-2">
              <div className="">
                <h1 className="font-bellagia text-2xl font-light uppercase tracking-[-0.05rem]">
                  Rei
                </h1>
                <h1 className="md:text-3xlxl font-bellagia text-4xl font-light uppercase tracking-[-0.05rem]">
                  Dom Pipas
                </h1>
              </div>
            </div>
          </div>
          <div className="grid gap-8 gap-y-8 text-sm sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <h2 className="mb-2 font-bold">Rei Dom Pipas</h2>
              R. dos Bombeiros Voluntários, Nº63 A <br />
              3720-216 Oliveira de Azeméis, Portugal
              <div className="">
                <Button className="mt-2" variant="capsule">
                  <Link href={GOOGLE_MAPS}>Ver Mapa</Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="font-title text-headings mb-2 font-bold">
                Aberto todos os dias
              </div>
              <div className="">
                <ul>
                  <li>Segunda-feira - Domingo: 12:00 - 15:00</li>
                  <li>Sexta - Sábado: 19:30 - 23:00</li>
                </ul>
              </div>
            </div>

            <Dialog>
              <DialogTrigger className="text-start items-start p-0 mb-2">
                <div className="flex flex-col items-start justify-start">
                  <h2 className="mb-2 font-bold">Contactos</h2>
                  <a className=" underline underline-offset-2">
                    {CONTACTS.PERSONAL}
                    <span className="text-[10px]">
                      {" "}
                      (Chamada para rede fixa nacional)
                    </span>
                  </a>
                  <a className=" underline underline-offset-2">
                    {CONTACTS.COMPANY}
                    <span className="text-[10px]">
                      {" "}
                      (Chamada para rede móvel nacional)
                    </span>
                  </a>
                  <a className=" mt-2 underline underline-offset-2">{EMAIL}</a>
                </div>
              </DialogTrigger>
              <DialogContent className="px-4">
                <DialogHeader>
                  <DialogTitle>Contactos</DialogTitle>
                  <DialogDescription>
                    Veja abaixo os nossos contactos e clique no ícone para
                    copiar
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  {[
                    { text: CONTACTS.PERSONAL, href: "tel:", icon: Phone },
                    { text: CONTACTS.COMPANY, href: "tel:", icon: Phone },
                    { text: EMAIL, href: "mailto:", icon: Mail },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center w-full gap-4">
                      <div className="rounded-md w-full border border-input bg-primary-foreground px-3 py-2 text-sm relative flex items-center">
                        {item.text}
                        <button className="absolute right-3 flex items-center gap-2 text-xs">
                          <Button
                            size="xs"
                            className="gap-2 text-xs sm:bg-transparent "
                            variant="ghost"
                          >
                            <a href={`${item.href}${item.text}`}>
                              <item.icon className="size-4" />
                            </a>
                          </Button>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
