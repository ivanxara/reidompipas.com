"use client";

import React from "react";
import Wrapper from "../layout/wrapper";
import Link from "next/link";
import { Button } from "../ui/button";
import { CalendarDaysIcon } from "lucide-react";

export default function FloatingBooking() {
  return (
    <Link
      className="fixed bottom-8 left-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-20"
      href="/reservar"
    >
      <Button
        type="submit"
        variant="capsuleBig"
        className="shadow-custom-2 mx-auto hover:scale-105"
      >
        <CalendarDaysIcon className="size-6 mr-2" strokeWidth={2} />
        <span>Reservar Mesa</span>
      </Button>
    </Link>
  );
}
