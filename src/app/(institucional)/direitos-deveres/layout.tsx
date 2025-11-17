import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Direitos e deveres do paciente | Dr. Online",
};

export default function LayoutContact({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
