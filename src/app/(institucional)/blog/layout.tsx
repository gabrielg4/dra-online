import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Conteúdos sobre Saúde Digital | Blog da dr.online",
  description:
    "Acompanhe o Blog da dr.online e fique por dentro das tendências e inovações em saúde digital, bem-estar e medicina baseada em evidência.",
};

export default function LayoutBlog({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
