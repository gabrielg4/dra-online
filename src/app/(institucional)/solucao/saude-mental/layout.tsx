import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Saúde Mental Online | Atendimento Psicológico dr.online",
  description:
    "Cuide da sua saúde mental com a dr.online. Atendimento psicológico e psiquiátrico online com profissionais qualificados e prontos para te ajudar.",
};

export default function LayoutHome({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
