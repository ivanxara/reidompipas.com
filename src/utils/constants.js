import ImageMenuExecutivo from "@/assets/img/menu_executivo_webp.webp";
import ImageMenuBanquete from "@/assets/img/menu_banquete_webp.webp";
import ImageMenuCarnaval from "@/assets/img/carnaval.jpg";
import ImageMenuDiaDaMulher from "@/assets/img/dia-da-mulher.jpg";

export const CONTACTS = {
  PERSONAL: "+351912040915",
  COMPANY: "+351256386200",
};
export const WHATSAPP = "https://api.whatsapp.com/send/?phone=+351912040915";

export const MENUS = {
  DIARIAS: {
    ID: 1,
    NAME: "Diarias",
  },
  MENU: {
    ID: 7,
    NAME: "Menu",
  },
};

export const GOOGLE_MAPS =
  "https://www.google.com/maps/place/Restaurante+Rei+Dom+Pipas/@40.8410671,-8.4825056,17z/data=!3m1!4b1!4m6!3m5!1s0xd2378799e3321d9:0xe3f8000ca0a3e3ec!8m2!3d40.8410671!4d-8.4799307!16s%2Fg%2F1tflhhnj?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D";

export const EMAIL = "reidompipas@hotmail.com";

export const SOCIALS = {
  INSTAGRAM: "https://www.instagram.com/reidompipas",
};

export const EVENTS = [
  {
    label: "Menu Dia das Mulheres",
    subLabel:
      "🌸 Dia 8 Celebre o Dia da Mulher com um menu especial e DJ ao vivo! 🎶✨ Reserve já! 💖",
    image: ImageMenuDiaDaMulher,
    to: "/eventos/dia-das-mulheres",
  },
  {
    label: "Menu Carnaval",
    subLabel:
      "🎭 Dia 4 de Março Venha festejar o Carnaval connosco com muita animação, boa comida e DJ ao vivo! 🔥",
    image: ImageMenuCarnaval,
    to: "/eventos/carnaval",
  },
  {
    label: "Menu para Grupos",
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
