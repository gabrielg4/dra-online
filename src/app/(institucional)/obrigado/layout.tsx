import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Obrigado | Dr. Online",
};

export default function LayoutObrigado({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
