"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile/mobile-menu";
import { NavigationV2 } from "./navigationV2";

interface HeaderProps {
  startWithBlur?: boolean;
  hasBgWhite?: boolean;
}

export const Header = ({ startWithBlur, hasBgWhite }: HeaderProps) => {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Executa uma vez ao montar para aplicar o estado correto
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cn("fixed top-0 z-[99] w-full pt-5 duration-500")}>
      <div className="container">
        <header
          className={cn(
            "border-brand-light-green relative flex w-full items-center justify-between gap-5 rounded-full border px-6 py-4 duration-500 md:py-4",
            headerScrolled && "scrolled",
            startWithBlur && "scrolled",
            hasBgWhite && "bg-white",
          )}
        >
          <Link href="/">
            <Image
              src={
                hasBgWhite ? "/images/logo-bg-white.svg" : "/images/logo.svg"
              }
              alt="Logo - Dr. Online"
              width={140}
              height={25}
            />
          </Link>
          {/* <Navigation /> */}
          {hasBgWhite ? (
            <NavigationV2 textColor="text-[#282F3B]" />
          ) : (
            <NavigationV2 />
          )}
          <div className="flex w-fit items-center gap-2">
            <Button
              variant={"outline"}
              className={cn(
                "group hidden rounded-full border-white bg-transparent px-6 py-2 duration-300 hover:bg-white md:flex",
                hasBgWhite &&
                  "border-brand-main-green hover:bg-brand-main-green",
              )}
            >
              <Link
                href="/"
                className={cn(
                  "text-md group-hover:text-brand-main-green font-medium text-white",
                  hasBgWhite && "text-brand-main-green hover:text-white",
                )}
              >
                Área do cliente
              </Link>
            </Button>
            <MobileMenu />
          </div>
        </header>
      </div>
    </div>
  );
};
