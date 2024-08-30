"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Pipas from "@/assets/img/pipasUpscaled.png";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "@/assets/styles/navbar.css";

import pipas from "@/assets/img/pipasUpscaled.png";
import Wrapper from "./wrapper";
import { cn } from "@/lib/utils";
import LogoInstagram from "../shared/logo-instagram";
import LogoFacebook from "../shared/logo-facebook";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Wrapper
        className={cn(
          "top-0 sticky z-50 flex flex-col items-center py-6 lg:py-10",
          open ? "bg-secondary" : "bg-background"
        )}
      >
        <div className="flex w-full justify-between">
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
          <div className="relative group grid place-items-center">
            <button
              onClick={() => setOpen(!open)}
              className={cn(
                "rounded-full p-10 absolute group-hover:bg-primary opacity-0 hover:opacity-100 group active:scale-[80%] transition-all "
              )}
            ></button>
            <button className="w-10 pointer-events-none">
              <div
                className={`menu-icon group-active:scale-[80%] size-4 ${
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
            </button>
          </div>
        </div>
      </Wrapper>
      {open && (
        <div className="fixed top-0 z-40 h-full shadow-2xl w-full bg-secondary flex items-center justify-center text-primary-foreground">
          {/* socials */}
          <div className="absolute bottom-10 py-6 lg:py-10 gap-4 flex items-center">
            <LogoInstagram />
            <LogoFacebook />
          </div>
          {/* items */}
          <Wrapper className="flex flex-col">
            <div className="flex flex-col items-center">
              {["Inicio", "Menu", "Diarias", "Eventos"].map((name) => (
                <Link
                  href={""}
                  key={name}
                  className="flex items-center justify-between py-4 px-2 hover:bg-primary"
                >
                  <span className="font-bellagia font-light text-4xl tracking-tighter uppercase">
                    {name}
                  </span>
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
