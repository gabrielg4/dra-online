import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Pronto Atendimento 24h Online | dr.online - Saúde Digital",
  description:
    "Pronto Atendimento 24h Online e imediato com a dr.online para acolhimento clínico ágil e humanizado em qualquer lugar.",
};

export default function LayoutHome({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
