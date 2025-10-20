import { Header } from "@/components/header";
import React, { type PropsWithChildren } from "react";

export default function LayoutBlog({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
