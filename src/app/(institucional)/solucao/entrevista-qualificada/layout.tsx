import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Entrevista Médica Qualificada | dr.online - Saúde Digital",
  description:
    "Reduza riscos e garanta conformidade com a Entrevista Médica Qualificada da dr.online. Dados validados por equipe multidisciplinar com agilidade e segurança.",
};

export default function LayoutHome({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
