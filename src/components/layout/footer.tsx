import { cn } from "@/lib/utils";
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";
import Wrapper from "./wrapper";
import { Button } from "../ui/button";
import { CONTACTS, EMAIL, GOOGLE_MAPS, SOCIALS } from "@/utils/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-neutral-50 border-t border-neutral-100")}>
      <Wrapper className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="space-y-1">
              <h2 className="font-bellagia text-sm tracking-[0.2em] text-secondary/60 uppercase">
                Restaurante
              </h2>
              <h1 className="font-bellagia text-3xl md:text-4xl text-secondary font-medium tracking-tight">
                Rei Dom Pipas
              </h1>
            </div>
            <p className="text-secondary/70 text-sm leading-relaxed max-w-xs font-light">
              Tradição, sabor e hospitalidade em Oliveira de Azeméis há mais de
              20 anos.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={SOCIALS.INSTAGRAM}
                target="_blank"
                className="p-2 rounded-full bg-white border border-secondary/10 hover:bg-secondary hover:text-white transition-colors group"
              >
                <Instagram className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/ReiDomPipas"
                target="_blank"
                className="p-2 rounded-full bg-white border border-secondary/10 hover:bg-secondary hover:text-white transition-colors group"
              >
                <Facebook className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bellagia text-lg text-secondary">
              Localização
            </h3>
            <div className="flex flex-col gap-4 text-sm text-secondary/80 font-light">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span className="leading-relaxed">
                  R. dos Bombeiros Voluntários, Nº63 A<br />
                  3720-216 Oliveira de Azeméis
                  <br />
                  Portugal
                </span>
              </div>
              <Link href={GOOGLE_MAPS} target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit rounded-full text-xs h-8 border-secondary/20 hover:border-secondary"
                >
                  Ver no Mapa
                </Button>
              </Link>
            </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bellagia text-lg text-secondary">Contactos</h3>
            <div className="flex flex-col gap-4 text-sm text-secondary/80 font-light">
              <a
                href={`tel:${CONTACTS.PERSONAL}`}
                className="flex gap-3 items-center hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span>{CONTACTS.PERSONAL}</span>
              </a>
              <a
                href={`tel:${CONTACTS.COMPANY}`}
                className="flex gap-3 items-center hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span>{CONTACTS.COMPANY}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex gap-3 items-center hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <span>{EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bellagia text-lg text-secondary">Horário</h3>
            <div className="flex flex-col gap-4 text-sm text-secondary/80 font-light">
              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <div className="space-y-2">
                  <div>
                    <span className="block font-medium text-secondary">
                      Segunda a Domingo
                    </span>
                    <span>12:00 - 15:00</span>
                  </div>
                  <div>
                    <span className="block font-medium text-secondary">
                      Sexta e Sábado
                    </span>
                    <span>19:30 - 23:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/40 font-light">
          <p>© {currentYear} Rei Dom Pipas. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors">
              Termos e Condições
            </Link>
            <Link
              href="/faq"
              className="hover:text-secondary transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
