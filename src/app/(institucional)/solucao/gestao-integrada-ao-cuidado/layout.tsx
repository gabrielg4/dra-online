import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Gestão Integrada do Cuidado | dr.online - Saúde Digital",
  description:
    "Solução da dr.online para Gestão Integrada do Cuidado. Monitoramento contínuo, resolutividade e suporte para pacientes crônicos e complexos.",
};

export default function LayoutHome({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
