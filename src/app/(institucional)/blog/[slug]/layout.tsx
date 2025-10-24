import { Header } from "@/components/header";
import { HeaderBgWhite } from "@/components/header-bg-white";
import React, { type PropsWithChildren } from "react";

export default function LayoutBlogpost({ children }: PropsWithChildren) {
  return (
    <>
      <Header hasBgWhite />
      {children}
    </>
  );
}
