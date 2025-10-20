import { Header } from "@/components/header";
import React, { type PropsWithChildren } from "react";

export default function LayoutHome({ children }: PropsWithChildren) {
  return (
    <>
      <Header startWithBlur />
      {children}
    </>
  );
}
