import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Vagas em Telemedicina e Saúde Digital | Trabalhe na dr.online ",
  description:
    "Faça parte da dr.online! Cadastre-se como médico credenciado ou envie seu currículo e integre nossa equipe de saúde digital e telemedicina.",
};

export default function LayoutWorkWithUs({ children }: PropsWithChildren) {
  return (
    <>
      <Header startWithBlur />
      {children}
    </>
  );
}
