import React from "react";

export default function Heading2({ children }: any) {
  return (
    <h2 className="text-2xl text-secondary-foreground tracking-tight">
      {children}
    </h2>
  );
}
