import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Cases de sucesso | Dr. Online",
};

export default function LayoutCases({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
