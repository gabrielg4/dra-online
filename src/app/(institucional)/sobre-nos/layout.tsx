import { Header } from "@/components/header";

import React, { type PropsWithChildren } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referência em Saúde Digital no Brasil | dr.online",
  description:
    "Conheça a dr.online, a plataforma de saúde digital que transforma o acesso à saúde com tecnologia, cuidado humanizado e resolutividade.",
};

export default function LayoutAbout({ children }: PropsWithChildren) {
  return (
    <>
      <Header startWithBlur />
      {children}
    </>
  );
}
