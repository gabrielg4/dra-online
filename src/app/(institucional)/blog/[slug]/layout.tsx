import { Header } from "@/components/header";
import React, { type PropsWithChildren } from "react";

export default function LayoutBlogpost({ children }: PropsWithChildren) {
  return (
    <>
      <Header hasBgWhite />
      {children}
    </>
  );
}
