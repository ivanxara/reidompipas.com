import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading1 from "../ui/heading-1";
import Heading2 from "../ui/heading-2";
import { Item } from "@radix-ui/react-select";

export default function CardEvent({
  to,
  label,
  subLabel,
  image,
}: {
  to: string;
  label: string;
  subLabel: string;
  image: any;
}) {
  return (
    <Link
      href={to}
      className="rounded-2x relative h-[500px] sm:h-[400px] md:h-[680px] w-full overflow-hidden bg-primary"
    >
      <div className="absolute h-full w-full bg-gradient-to-t from-secondary to-black/20 transition-all group-hover:h-full"></div>
      <Image className="h-full w-full object-cover" src={image} alt="" />
      <div className="absolute bottom-8 px-8 sm:bottom-14 flex flex-col w-full items-start sm:px-14">
        <div className="flex flex-col text-start text-primary">
          <Heading1 className="text-primary text-xl">{label}</Heading1>
          <Heading2 className="text-primary-foreground text-xl font-light text-pretty">
            {subLabel}
          </Heading2>
        </div>
      </div>
    </Link>
  );
}
