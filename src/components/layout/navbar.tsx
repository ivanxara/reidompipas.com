"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Pipas from "@/assets/img/logo_pipas.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Wrapper from "./wrapper";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const routes = [
  { name: "Inicio", url: "/" },
  { name: "Carta", url: "/carta" },
  { name: "Menu Executivo", url: "/menu-executivo" },
  { name: "Eventos", url: "/eventos" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled || open || pathname !== "/"
            ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <Wrapper className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 relative">
            <div className="flex items-center gap-3">
              <Image
                src={Pipas}
                width={40}
                height={40}
                alt="rei dom pipas"
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <div
                className={cn(
                  "flex flex-col transition-colors duration-300",
                  open ? "text-secondary" : "text-secondary"
                )}
              >
                <h1 className="font-bellagia text-xs font-light uppercase leading-none tracking-[0.1em]">
                  Rei
                </h1>
                <h1 className="font-bellagia text-sm font-light uppercase leading-none tracking-[0.1em]">
                  Dom Pipas
                </h1>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {routes.map((route) => (
              <Link
                key={route.url}
                href={route.url}
                className={cn(
                  "text-sm uppercase tracking-wider font-medium hover:text-primary transition-colors",
                  pathname === route.url ? "text-primary" : "text-secondary/80"
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/reservas">
              <Button className="rounded-full px-6 bg-secondary text-white hover:bg-secondary/90">
                Reservar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden z-50 relative p-2 text-secondary hover:text-primary transition-colors"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Wrapper>
      </header>

      {/* Spacer for fixed navbar on non-landing pages */}
      {pathname !== "/" && <div className="h-[64px] lg:h-[72px]" />}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
          >
            {/* Backdrop Blur Layer */}
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

            {/* Menu Content */}
            <div className="relative flex flex-col items-center justify-center min-h-screen gap-8 px-6">
              {routes.map((route, index) => (
                <motion.div
                  key={route.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={route.url}
                    onClick={() => setOpen(false)}
                    className="font-bellagia text-3xl md:text-4xl text-secondary hover:text-primary transition-colors"
                  >
                    {route.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/reservas" onClick={() => setOpen(false)}>
                  <Button className="p-8 rounded-full text-lg bg-secondary text-white hover:bg-secondary/90 font-bellagia">
                    Reservar Mesa
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
