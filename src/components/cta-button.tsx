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
    <Button className="p-0 rounded-full bg-brand-light-green group hover:bg-brand-main-green duration-300">
      <Link
        href={url}
        className="py-3 px-6 flex items-center gap-2 text-brand-dark-green text-lg font-medium group-hover:text-white duration-300"
      >
        {title}
        <ArrowUpRight className="size-6 group-hover:rotate-45 duration-300" />
      </Link>
    </Button>
  );
};
