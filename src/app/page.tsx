"use client";

import { ArrowUpRight, CalendarDaysIcon, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import ImageRestaurant1 from "@/assets/img/restaurant_inside1_webp.webp";
import ImageRestaurant2 from "@/assets/img/restaurant_inside2.webp";
import ImageFood1 from "@/assets/img/food_1_webp.webp";
import { EVENTS, MENUS } from "@/utils/constants";
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
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase/client";
import Confetti from "@/components/confeti";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isDesktopLG = useMediaQuery("(min-width: 1350px)");
  const isDesktopXLG = useMediaQuery("(min-width: 1350px)");

  const queryProducts = useQuery({
    queryKey: ["special_products"],
    queryFn: async () => {
      const { data = [], error } = await supabase
        .from("newMenus")
        .select("*, products(*)")
        .eq("menuId", MENUS.MENU.ID)
        .eq("special", true);

      return data?.map((item) => item.products);
    },
  });

  return (
    <>
      {/* <FloatingBooking /> */}
      <Confetti />
      {/* landing */}
      <section className="relative flex h-[calc(90vh-128px)] w-full items-center justify-center">
        <div className="mb-32 flex flex-col items-center">
          {/* <Image src={Pipas} width={120} alt="rei dom pipas" /> */}
          <h1 className="font-bellagia text-md text-center font-light uppercase md:text-lg">
            Restaurante
          </h1>
          <h1 className="font-bellagia text-center text-4xl font-light uppercase tracking-[-0.1rem] md:text-6xl">
            Rei Dom Pipas
          </h1>
          <div className="mt-10">
            <Heading2 className="uppercase text-base text-center pb-4">
              Eventos atuais
            </Heading2>
            <div className="gap-4 flex flex-col md:flex-row">
              <Link href="/eventos/carnaval">
                <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-yellow-500 py-1 pl-6 pr-14 font-medium text-neutral-50">
                  <span className="z-10 pr-2">Dia de Carnaval</span>
                  <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-yellow-400 transition-[width] group-hover:w-[calc(100%-8px)]">
                    <div className="mr-2.5 flex items-center justify-center">
                      <ChevronRight />
                    </div>
                  </div>
                </button>
              </Link>
              <Link href="/eventos/dia-das-mulheres">
                <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-pink-500 py-1 pl-6 pr-14 font-medium text-neutral-50">
                  <span className="z-10 pr-2">Dia das Mulheres</span>
                  <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-pink-400 transition-[width] group-hover:w-[calc(100%-8px)]">
                    <div className="mr-2.5 flex items-center justify-center">
                      <ChevronRight />
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-20 md:gap-28">
        {/* about */}
        <Wrapper>
          {/* mobile */}
          <Image
            loading="lazy"
            className="w-full lg:hidden h-[500px] object-cover "
            src={ImageRestaurant2}
            alt="Restaurante Dentro Mobile"
          />
          {/* destop */}
          <Image
            loading="lazy"
            className={"w-full hidden max-h-[430px] lg:block object-cover"}
            src={ImageRestaurant1}
            alt="Restaurante Dentro Desktop"
          />

          <div className="mt-4 flex justify-between md:mt-8">
            <h2 className="font-inter text-secondary text-justify">
              O restaurante Rei Dom Pipas é um espaço acolhedor com mais de 20
              anos de história, gerido por uma equipa dedicada. Oferece pratos
              de comida tradicional portuguesa e uma vasta seleção de vinhos
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
            className="h-[500px] sm:h-[400px] md:h-[680px] w-full object-cover "
            src={ImageFood1}
            alt="pipasInside"
          />
          <div className="flex flex-col">
            <div className="flex w-full items-center justify-between">
              <Heading1>CARTA</Heading1>
              <Button variant="capsule">
                <Link href="/carta">Ver tudo</Link>
              </Button>
            </div>
            <div className="mt-4 flex flex-col divide-y-2 divide-secondary/10 text-2xl md:mt-8">
              {queryProducts.data &&
                queryProducts.data.slice(0, 5).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4"
                    >
                      <span className="tracking-tight">{item.name}</span>
                      <span className="font-light text-base whitespace-nowrap">
                        {parseFloat(item.price).toFixed(2)} €
                      </span>
                    </div>
                  );
                })}
              <div className="">
                <Link
                  href="/carta"
                  className="flex pt-4 w-fit text-xs underline underline-offset-2"
                >
                  Ver carta completa
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
          <div className="flex relative flex-col gap-4 bg-secondary px-20 py-20 sm:p-20">
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
