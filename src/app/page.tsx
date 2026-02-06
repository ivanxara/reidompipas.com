"use client";

import { ChevronRight, ArrowRight } from "lucide-react";
import React from "react";
import ImageRestaurant1 from "@/assets/img/IMG_1487.webp";
import ImageRestaurant2 from "@/assets/img/IMG_1533.webp";
import ImageFood1 from "@/assets/img/PHOTO-2026-02-06-15-56-18.jpg";
import { EVENTS, MENUS } from "@/utils/constants";
import ImageUberEats from "@/assets/img/test/uber-eats.svg";
import ImageGlovo from "@/assets/img/test/Glovo_logo.svg";
import ImageBoltFood from "@/assets/img/bolt-food.svg";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/layout/wrapper";
import { Button } from "@/components/ui/button";
import Heading1 from "@/components/ui/heading-1";
import Footer from "@/components/layout/footer";
import Heading2 from "@/components/ui/heading-2";
import CardEvent from "@/components/shared/card-event";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase/client";
import Confetti from "@/components/confeti";
import { motion } from "framer-motion";
import Script from "next/script";
import { breadcrumbList } from "@/app/_seo/schema";

export default function Home() {
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
      <Script id="ldjson-breadcrumb-home" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(
          breadcrumbList([{ name: "Início", item: "https://reidompipas.com/" }])
        )}
      </Script>
      <Confetti />

      <div className="py-16">
        {/* Hero Section - Clean Editorial Style */}
        <section className="relative flex flex-col lg:flex-row w-full bg-background overflow-hidden">
          <Wrapper className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full z-10 py-12 lg:py-20">
            {/* Text Content - Spans 7 cols */}
            <div className="lg:col-span-7 flex flex-col gap-8 lg:pr-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-secondary/30"></span>
                  <span className="font-bellagia text-sm tracking-[0.25em] text-secondary/60 uppercase">
                    Desde 2003
                  </span>
                </div>

                <h1 className="font-bellagia text-secondary leading-none tracking-tight">
                  <div className="relative inline-block">
                    <span className="text-5xl md:text-8xl">Rei</span>
                    <motion.div
                      initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: -25, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                      className="absolute -top-2 md:-top-3.5 -left-1 md:-left-1.5 text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="current"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler fill-current stroke-secondary size-7 md:size-12"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

                        {/* crown body – taller + slimmer base */}
                        <path d="M12 4.6l3.6 6.1l4.9-3.4l-1.7 8.7H5.2L3.5 7.3l4.9 3.4L12 4.6z" />
                      </svg>
                    </motion.div>
                  </div>
                  <span className="block text-5xl md:text-7xl mt-2">
                    Dom Pipas
                  </span>
                </h1>

                <p className="font-inter text-secondary/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  Uma experiência gastronómica que celebra o melhor da cozinha
                  portuguesa com um toque de realeza.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/carta">
                    <Button className="h-14 px-10 rounded-full text-base bg-secondary text-white hover:bg-secondary/90 hover:scale-105 transition-all duration-300 shadow-xl">
                      Ver Menu
                    </Button>
                  </Link>
                  <Link href="/eventos">
                    <Button
                      variant="ghost"
                      className="h-14 border border-secondary px-8 rounded-full text-base text-secondary hover:bg-secondary/5 transition-all"
                    >
                      Eventos <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Mini Events Ticker */}
                <div className="flex items-center gap-4 pt-8 border-t border-secondary/10 mt-8">
                  <span className="text-xs uppercase tracking-widest text-secondary/40 font-bold whitespace-nowrap">
                    Em Breve:
                  </span>
                  <div className="flex gap-4 overflow-hidden">
                    <Link
                      href="/eventos"
                      className="group flex items-center gap-2 text-sm text-secondary/70 hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                      <span className="font-medium">Carnaval</span>
                    </Link>
                    <Link
                      href="/eventos"
                      className="group flex items-center gap-2 text-sm text-secondary/70 hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                      <span className="font-medium">Dia da Mulher</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image Content - Spans 5 cols - Floating Card Style */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative aspect-[3/4] w-full max-w-md mx-auto"
              >
                {/* Abstract/Artistic Image Treatment */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-neutral-200">
                  <Image
                    src={ImageRestaurant1}
                    alt="Rei Dom Pipas Interior"
                    fill
                    className="object-cover saturate-[1.2] contrast-[1.3]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Grain/Texture Overlay to mask quality */}
                  <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

                  {/* Border Frame */}
                  <div className="absolute inset-4 border border-white/30 rounded-xl z-20 pointer-events-none" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 z-30 bg-background/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-secondary/5">
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="font-bellagia text-3xl text-secondary">
                      4.2
                    </span>
                    <div className="flex text-primary text-xs gap-0.5 my-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-secondary/60">
                      Google Reviews
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </Wrapper>
        </section>

        <div className="flex flex-col gap-24 md:gap-32">
          {/* About Section */}
          <Wrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-2xl"
              >
                <Image
                  className="object-cover w-full h-full saturate-[1.1] contrast-[1.2]"
                  src={ImageRestaurant2}
                  alt="Interior do Restaurante"
                  fill
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-8"
              >
                <div className="space-y-4">
                  <h3 className="font-bellagia text-3xl md:text-4xl text-secondary">
                    Tradição e Hospitalidade
                  </h3>
                  <div className="h-1 w-12 bg-primary" />
                </div>

                <p className="font-inter text-secondary/80 text-lg leading-relaxed font-light">
                  O restaurante{" "}
                  <span className="font-medium text-secondary">
                    Rei Dom Pipas
                  </span>{" "}
                  é um marco gastronómico em Oliveira de Azeméis com mais de 20
                  anos de história. Aqui, a tradição é servida com nobreza.
                </p>
                <p className="font-inter text-secondary/80 text-lg leading-relaxed font-light">
                  Com uma ementa variada e confecionada com mestria, cada prato
                  é uma homenagem aos sabores autênticos de Portugal. Somos
                  também reconhecidos pelas nossas{" "}
                  <span className="font-medium text-secondary">Diárias</span>,
                  onde servimos qualidade e conforto todos os dias. O nosso
                  objetivo é simples: proporcionar uma hospitalidade calorosa e
                  fazer com que cada cliente se sinta verdadeiramente em casa.
                </p>
              </motion.div>
            </div>
          </Wrapper>

          {/* Menu Preview Section */}
          <Wrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 md:order-1 flex flex-col">
                <div className="mb-10 flex flex-col gap-4">
                  <h2 className="font-bellagia text-4xl text-secondary md:text-5xl">
                    A Nossa Carta
                  </h2>
                  <p className="font-inter text-lg font-light text-secondary/70">
                    Sabores autênticos, preparados com paixão.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  {queryProducts.data &&
                    queryProducts.data.slice(0, 5).map((item, index) => (
                      <div
                        key={index}
                        className="group flex items-baseline justify-between gap-4"
                      >
                        <span className="text-xl font-light text-secondary group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        <span className="h-px flex-1 border-b border-dotted border-secondary/30"></span>
                        <span className="font-medium text-lg text-secondary whitespace-nowrap">
                          {parseFloat(item.price).toFixed(2)} €
                        </span>
                      </div>
                    ))}

                  <div className="mt-8">
                    <Link href="/carta">
                      <Button
                        variant="outline"
                        className="h-12 w-full sm:w-auto rounded-full px-8 text-base border-secondary hover:bg-secondary hover:text-white transition-all"
                      >
                        Ver Menu Completo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg shadow-2xl"
              >
                <Image
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  src={ImageFood1}
                  alt="Prato Especial"
                  fill
                />
              </motion.div>
            </div>
          </Wrapper>

          {/* Events Grid */}
          <Wrapper className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            {EVENTS.map((item: any, index) => (
              <CardEvent key={index} {...item} />
            ))}
          </Wrapper>

          {/* Takeaway / Footer CTA */}
          <Wrapper>
            <div className="relative overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100 p-8 md:p-16 lg:p-24">
              <div className="flex flex-col items-center text-center gap-10">
                <div className="space-y-4">
                  <h2 className="font-bellagia text-3xl md:text-5xl text-secondary">
                    Takeaway & Delivery
                  </h2>
                  <p className="font-inter text-lg font-light text-secondary/70 max-w-xl mx-auto">
                    Desfrute da nossa cozinha no conforto da sua casa.
                    Disponível através das plataformas parceiras.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-16">
                  {[
                    { name: "Uber Eats", image: ImageUberEats },
                    { name: "Glovo", image: ImageGlovo },
                    { name: "Bolt Food", image: ImageBoltFood },
                  ].map((partner, index, arr) => (
                    <React.Fragment key={partner.name}>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 hover:opacity-80 transition-opacity"
                      >
                        <div className="relative h-12 w-32 md:h-20 transition-transform flex items-center justify-center">
                          <Image
                            src={partner.image}
                            alt={partner.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </a>
                      {index < arr.length - 1 && (
                        <div className="hidden sm:block w-px h-12 bg-secondary/10" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
}
