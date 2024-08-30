"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";
import ImageRestaurant from "@/assets/img/restaurant_inside1.png";
import ImageFood1 from "@/assets/img/food_1.jpeg";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/layout/wrapper";
import { Button } from "@/components/ui/button";
import Heading1 from "@/components/ui/heading-1";
import Footer from "@/components/layout/footer";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {/* landing */}
      <section className="relative flex h-[calc(90vh-128px)] w-full items-center justify-center">
        <div className="mb-32 flex flex-col items-center font-bellagia ">
          {/* <Image src={Pipas} width={120} alt="rei dom pipas" /> */}
          <h1 className="text-md text-center font-light uppercase md:text-lg">
            Resturante
          </h1>
          <h1 className="text-center text-4xl font-light uppercase tracking-[-0.1rem] md:text-6xl">
            Rei Dom Pipas
          </h1>
        </div>
      </section>
      <section className="flex flex-col gap-20 md:gap-28">
        {/* about */}
        <Wrapper>
          {/* <h1 className="font-bellagia text-2xl">Restaurante</h1> */}
          <Image
            className="h-[450px] sm:h-[400px] w-full object-cover"
            src={ImageRestaurant}
            alt=""
            style={{ objectPosition: isDesktop ? "left -400px" : "" }}
          />
          <div className="mt-4 flex justify-between md:mt-8">
            <h2 className="font-inter text-secondary">
              O restaurante Rei Dom Pipas é um espaço acolhedor com mais de 20
              anos de história, gerido por uma equipa dedicada. Oferece pratos
              da comida tradicional portuguesa e uma vasta seleção de vinhos
              nacionais e internacionais. O objetivo é proporcionar uma
              hospitalidade calorosa e criar momentos de celebração, fazendo com
              que os clientes se sintam em casa.
            </h2>
            {/* <h1 className="w-full text-right text-4xl font-extralight uppercase ">
            Oliveira de Azeméis
          </h1> */}
          </div>
        </Wrapper>
        {/* menu */}
        <Wrapper className="grid gap-y-8 sm:gap-x-12 md:grid-cols-2 lg:gap-x-28">
          <Image
            className="h-[450px] sm:h-[400px] md:h-[630px] w-full object-cover"
            src={ImageFood1}
            alt="pipasInside"
          />
          <div className="flex flex-col">
            <div className="flex w-full items-center justify-between">
              <Heading1>MENU</Heading1>
              <Button variant="capsule">
                <Link href="/menu">Ver tudo</Link>
              </Button>
            </div>
            <div className="mt-4 flex flex-col divide-y-2 divide-secondary/10 text-2xl md:mt-8">
              {[
                { name: "Rei dom pipas", price: "25 €" },
                { name: "Bacalhão", price: "22.5 €" },
                { name: "Peixos", price: "22.5 €" },
                { name: "Peixos", price: "22.5 €" },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between py-4"
                  >
                    <span className="tracking-tight">{item.name}</span>
                    <span className="font-light">{item.price}</span>
                  </div>
                );
              })}
              <div className="">
                <Link
                  href="/menu"
                  className="flex pt-4 text-xs underline underline-offset-2"
                >
                  Ver menu completo
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          {/* <h1 className="font-bellagia text-2xl">Talk to'em</h1> */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((x) => (
              <div
                key={x}
                className="rounded-2x relative h-[580px] overflow-hidden bg-primary md:h-[630px]"
              >
                <div className="absolute h-full w-full bg-gradient-to-t from-secondary to-black/25 transition-all group-hover:h-full"></div>
                <img
                  className="h-full w-full object-cover"
                  src="https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="absolute bottom-10 flex w-full items-end justify-between px-10">
                  <div className="flex flex-col text-start text-primary">
                    <h1 className="text-2xl font-semibold text-primary transition-all group-hover:text-3xl">
                      Casamentos
                    </h1>
                    <h3 className="text-sm  transition-all group-hover:text-base text-primary-foreground">
                      Segunda a sexta
                    </h3>
                  </div>
                  <button className="grid aspect-square place-items-center rounded-full border border-primary-foreground p-3 transition-all group-hover:p-4">
                    <ArrowUpRight
                      strokeWidth={1}
                      className="size-6 text-primary-foreground transition-all group-hover:rotate-45"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
        <Wrapper>
          <div className="flex w-full flex-col items-center justify-center bg-primary px-20 py-40 font-bellagia text-2xl font-light uppercase italic text-primary-foreground sm:p-20 md:flex-row">
            fazemos
            <span className="pl-3.5 font-inter text-4xl font-bold  not-italic">
              takeaway
            </span>
            <span className="pl-2">e</span>
            <span className="pl-3.5 font-inter text-4xl font-bold  not-italic">
              delivery
            </span>
          </div>
        </Wrapper>
      </section>
      <Footer />
    </>
  );
}
