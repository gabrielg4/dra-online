import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Espaço Digital de Saúde | dr.online - Saúde Digital",
  description:
    "Consultórios híbridos com tecnologia e exames assistidos. Solução ideal para ampliar o acesso à saúde com precisão e escalabilidade através da Telemedicina.",
};

export default function LayoutHome({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
