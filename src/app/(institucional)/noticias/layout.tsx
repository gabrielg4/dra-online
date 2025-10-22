import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Dr. Online na Mídia | Dr. Online",
};

export default function LayoutNotícias({ children }: PropsWithChildren) {
  return (
    <>
      <Header startWithBlur />
      {children}
    </>
  );
}
