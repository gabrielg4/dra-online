import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Fale conosco | Dr. Online",
};

export default function LayoutContact({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
