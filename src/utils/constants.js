import { Mail, Phone } from "lucide-react";

export const env = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
};

export const state = {
  restaurant: 1,
};

export const schedule = [
  {
    day: "segunda.",
    time: "12:00 - 15:00",
  },
  {
    day: "terça.",
    time: "12:00 - 15:00",
  },
  {
    day: "quarta.",
    time: "12:00 - 15:00",
  },
  {
    day: "quinta.",
    time: "12:00 - 15:00",
  },
  {
    day: "sexta.",
    time: "12:00 - 15:00",
    night: "19:30 - 23:00",
  },
  {
    day: "sábado.",
    time: "12:00 - 15:00",
    night: "19:30 - 23:00",
  },
  {
    day: "domingo.",
    time: "12:00 - 15:00",
  },
];

export const contacts = [
  {
    icon: <Phone strokeWidth={1} size={32} />,
    label: "Telemóvel",
    desc: "912 040 915",
    href: "tel:912040915",
  },
  {
    icon: <Phone strokeWidth={1} size={32} />,
    label: "Telefone",
    desc: "256 386 200",
    href: "tel:256386200",
  },
  {
    icon: <Mail strokeWidth={1} size={32} />,
    label: "Email",
    desc: "reidompipas@hotmail.com",
    href: "mailto:reidompipas@hotmail.com",
  },
];

export const icon_size = {
  navbar: {
    size: 20,
    strokeWidth: 1,
  },
  buttons: {
    
  }
};
