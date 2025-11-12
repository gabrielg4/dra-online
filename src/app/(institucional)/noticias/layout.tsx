import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Notícias sobre Saúde Digital | dr.online na Mídia",
  description:
    "Veja como a dr.online está transformando a saúde digital e ganhando destaque na imprensa nacional com soluções inovadoras e acessíveis.",
};

export default function LayoutNotícias({ children }: PropsWithChildren) {
  return (
    <>
      <Header startWithBlur />
      {children}
    </>
  );
}
