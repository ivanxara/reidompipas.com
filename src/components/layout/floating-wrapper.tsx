import React from "react";
import Wrapper from "./wrapper";

export default function FloatingWrapper({ children }: any) {
  return (
    <div className="fixed bottom-8 w-full z-20">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
