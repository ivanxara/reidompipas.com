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

export const FAQ_GLOBAL = [
  {
    question: "Como posso fazer uma reserva?",
    answer:
      "Pode fazer a sua reserva através da página de Reservas, por mensagem no telemóvel, Instagram ou Facebook, ou simplesmente ligando-nos.",
  },
  {
    question: "O que inclui o Menu Executivo?",
    answer: "Inclui couvert, sopa, prato, bebida e café.",
  },
  {
    question: "Onde posso ver o Menu Executivo?",
    answer:
      "O Menu Executivo pode ser consultado diariamente nos nossos stories do Instagram ou aqui no site, na página “Menu Executivo”.",
  },
  {
    question: "Há Menu Executivo ao fim de semana?",
    answer:
      "O Menu Executivo é servido nos dias úteis ao almoço e também ao sábado ao almoço.",
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "Estamos abertos todos os dias das 12:00 às 15:00. À sexta e sábado, reabrimos das 19:30 às 23:00.",
  },
  {
    question: "Têm serviço de takeaway ou delivery?",
    answer:
      "Sim. Pode encomendar diretamente connosco ou através de plataformas parceiras como Uber Eats, Glovo e Bolt Food.",
  },
];

export const EVENTS = [
  // {
  //   label: "Menu Carnaval",
  //   subLabel:
  //     "A folia chega à mesa! Junte-se a nós dia 16 de Fevereiro para uma noite vibrante com sabores irresistíveis, animação contagiante e DJ ao vivo. A festa é garantida! 🎭🔥",
  //   image: ImageMenuCarnaval,
  //   to: "/eventos/carnaval",
  // },
  {
    label: "Menu Dia da Mulher",
    subLabel:
      "Uma homenagem à elegância e à força feminina. Dia 7 de Março, desfrute de um jantar exclusivo com ambiente sofisticado e música ao vivo. Uma noite para celebrar! 🌸✨",
    image: ImageMenuDiaDaMulher,
    to: "/eventos/dia-das-mulheres",
  },
  {
    label: "Grupos & Empresas",
    subLabel:
      "Crie memórias inesquecíveis. O cenário perfeito para jantares de equipa, celebrações de aniversário e convívios que merecem um toque de distinção.",
    image: ImageMenuExecutivo,
    to: "/eventos/executivo",
  },
  {
    label: "Banquetes & Cerimónias",
    subLabel:
      "Momentos solenes merecem um serviço de excelência. Casamentos, batizados e comunhões com a tradição e requinte que a sua história merece.",
    image: ImageMenuBanquete,
    to: "/eventos/banquete",
  },
];
