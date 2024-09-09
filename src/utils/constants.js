import ImageMenuExecutivo from "@/assets/img/menu_executivo.jpg";
import ImageMenuBanquete from "@/assets/img/menu_banquete.jpg";

export const CONTACTS = {
  PERSONAL: "+351 912040915",
  COMPANY: "+351 256386200",
};

export const EVENTS = [
  {
    label: "Menu Executivo",
    subLabel:
      "Para aniversários, eventos corporativos e outras ocasiões especiais.",
    image: ImageMenuExecutivo,
    to: "/eventos/executivo",
  },
  {
    label: "Menu Banquete",
    subLabel:
      "Ideal para casamentos, batizados, comunhões e outras celebrações.",
    image: ImageMenuBanquete,
    to: "/eventos/banquete",
  },
];
