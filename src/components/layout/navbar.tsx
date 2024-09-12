"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Pipas from "@/assets/img/logo_pipas.png";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "@/assets/styles/navbar.css";

import pipas from "@/assets/img/logo_pipas.png";
import Wrapper from "./wrapper";
import { cn } from "@/lib/utils";
import LogoInstagram from "../shared/logo-instagram";
import LogoFacebook from "../shared/logo-facebook";
import Heading1 from "../ui/heading-1";
import { SOCIALS } from "@/utils/constants";

const routes = [
  { name: "Inicio", url: "/" },
  { name: "Carta", url: "/carta" },
  {
    name: "Menu Executivo",
    url: "/menu-executivo",
  },
  { name: "Eventos", url: "/eventos" },
  { name: "Reservas", url: "/reservas" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <>
      <Wrapper
        className={cn(
          "top-0 sticky z-50 flex flex-col items-center py-6 lg:py-10",
          open ? "bg-secondary" : "bg-background"
        )}
      >
        <div
          className={cn(
            "flex w-full justify-between items-center relative",
            open && "sm:pr-4"
          )}
        >
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src={Pipas} width={32} alt="rei dom pipas" />
              <div
                className={cn(
                  "flex flex-col",
                  open ? "text-primary-foreground" : "text-secondary"
                )}
              >
                <h1 className="hidden whitespace-nowrap text-left font-bellagia text-xs font-light uppercase leading-none tracking-[0.05rem] md:block">
                  Rei
                </h1>
                <h1 className="hidden whitespace-nowrap text-left font-bellagia font-light uppercase leading-none tracking-[0.05rem] md:block">
                  Dom Pipas
                </h1>
              </div>
            </div>
          </Link>
          {/* menu icon */}
          <button
            className="absolute px-10 py-8 -right-5 z-10"
            onClick={() => setOpen(!open)}
          ></button>
          <div className="relative group grid place-items-center">
            <div className="w-10 pointer-events-none">
              <div
                className={`menu-icon group-active:scale-[90%] size-4 ${
                  open ? "active" : ""
                }`}
              >
                <div>
                  <span
                    className={cn(
                      open ? "active bg-primary-foreground" : "bg-secondary"
                    )}
                  ></span>
                  <span
                    className={cn(
                      open ? "active bg-primary-foreground" : "bg-secondary"
                    )}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      {open && (
        <div className="fixed top-0 z-40 h-full shadow-2xl w-full bg-secondary flex items-center text-primary-foreground">
          {/* items */}
          <Wrapper className="flex flex-col w-full">
            <div className="flex flex-col items-center w-full divide-y">
              {routes.map((item: any, index) => (
                <Link
                  key={index}
                  href={item.url}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 px-2 w-full hover:bg-primary text-center"
                >
                  <Heading1 className="text-primary-foreground text-start">
                    {item.name}
                  </Heading1>
                </Link>
              ))}
            </div>
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default Navbar;
