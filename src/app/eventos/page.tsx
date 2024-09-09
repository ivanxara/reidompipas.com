"use client";

import React from "react";
import Wrapper from "@/components/layout/wrapper";

import { EVENTS } from "@/utils/constants";
import CardEvent from "@/components/shared/card-event";

export default function Page() {
  return (
    <Wrapper className="grid gap-y-8 sm:gap-x-12 md:grid-cols-2 lg:gap-x-28 pb-14">
      {EVENTS.map((item: any, index) => (
        <CardEvent key={index} {...item} />
      ))}
    </Wrapper>
  );
}
