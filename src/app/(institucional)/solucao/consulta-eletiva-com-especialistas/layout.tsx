import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Consulta Eletiva com Especialistas | dr.online - Saúde Digital",
  description:
    "Amplie o acesso à saúde com Consulta Eletiva da dr.online. Mais de 30 especialistas disponíveis com agilidade, qualidade e resolutividade.",
};

export default function LayoutHome({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
