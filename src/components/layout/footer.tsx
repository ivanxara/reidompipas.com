import { cn } from "@/lib/utils";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon } from "lucide-react";
import Link from "next/link";
import Pipas from "@/assets/img/logo_pipas.png";
import React from "react";
import Wrapper from "./wrapper";
import Image from "next/image";
import { Button } from "../ui/button";

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
                  <Link href="/menu">Ver Mapa</Link>
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
            <div className="flex flex-col">
              <h2 className="mb-2 font-bold">Contactos</h2>
              <a className=" underline underline-offset-2" href="">
                +351 256 386 200
                <span className="text-[10px]">
                  {" "}
                  (Chamada para rede fixa nacional)
                </span>
              </a>
              <a className=" underline underline-offset-2" href="">
                +351 912 040 915
                <span className="text-[10px]">
                  {" "}
                  (Chamada para rede móvel nacional)
                </span>
              </a>
              <a className=" mt-2 underline underline-offset-2" href="">
                reidompipas@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
