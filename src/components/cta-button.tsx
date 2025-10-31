"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CtaButtonProps {
  url: string;
  title: string;
}

export const CtaButton = ({ url, title }: CtaButtonProps) => {
  return (
    <Button className="bg-brand-light-green group hover:bg-brand-main-green h-auto rounded-full p-0 duration-300">
      <Link
        href={url}
        className="text-brand-dark-green flex items-center gap-2 px-6 py-3 text-lg font-medium duration-300 group-hover:text-white max-sm:p-3 max-sm:text-base"
      >
        {title}
        <ArrowUpRight className="size-6 duration-300 group-hover:rotate-45" />
      </Link>
    </Button>
  );
};
