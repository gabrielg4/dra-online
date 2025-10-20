import { Header } from "@/components/header";
import type { Metadata } from "next";
import React, { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Blog | Dr. Online",
};

export default function LayoutBlog({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
