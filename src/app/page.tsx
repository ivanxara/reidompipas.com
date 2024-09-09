"use client";

import { ArrowUpRight, CalendarDaysIcon } from "lucide-react";
import React, { useRef } from "react";
import ImageRestaurant from "@/assets/img/restaurant_inside1.png";
import ImageFood1 from "@/assets/img/food_1.jpeg";
import { EVENTS } from "@/utils/constants";
import ImageUberEats from "@/assets/img/test/uber-eats.svg";
import ImageGlovo from "@/assets/img/test/Glovo_logo.svg";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/layout/wrapper";
import { Button } from "@/components/ui/button";
import Heading1 from "@/components/ui/heading-1";
import Footer from "@/components/layout/footer";
import { useMediaQuery } from "@/hooks/use-media-query";
import Heading2 from "@/components/ui/heading-2";
import LogoInstagram from "@/components/shared/logo-instagram";
import LogoFacebook from "@/components/shared/logo-facebook";
import CardEvent from "@/components/shared/card-event";
import FloatingBooking from "@/components/shared/floating-booking";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <FloatingBooking />
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
            style={{
              objectPosition: isDesktop ? "left -400px" : "-80px 0px",
            }}
          />
          <div className="mt-4 flex justify-between md:mt-8">
            <h2 className="font-inter text-secondary text-justify">
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
        <Wrapper className="mt-8 grid gap-y-8 sm:gap-x-12 md:grid-cols-2 lg:gap-x-28">
          {EVENTS.map((item: any, index) => (
            <CardEvent key={index} {...item} />
          ))}
        </Wrapper>
        <Wrapper>
          <div className="flex relative flex-col gap-4 bg-primary px-20 py-20 sm:p-20">
            <div className="flex w-full flex-col items-center justify-center font-bellagia text-2xl font-light uppercase italic text-primary-foreground md:flex-row">
              fazemos
              <span className="pl-3.5 font-inter text-4xl font-bold  not-italic">
                takeaway
              </span>
              <span className="pl-2">e</span>
              <span className="pl-3.5 font-inter text-4xl font-bold  not-italic">
                delivery
              </span>
            </div>
          </div>
        </Wrapper>
      </section>
      <Footer className="pb-36" />
    </>
  );
}
