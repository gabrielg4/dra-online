"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "./navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile/mobile-menu";

export const Header = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !headerScrolled) {
        setHeaderScrolled(true);
      } else if (window.scrollY <= 50) {
        setHeaderScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerScrolled]);

  return (
    <div
      className={cn(
        "fixed top-0 z-50 w-full duration-500",
        !headerScrolled && "pt-5",
        headerScrolled && "bg-brand-dark-green pt-0",
      )}
    >
      <div className="container">
        <header
          className={cn(
            "flex w-full items-center justify-between gap-5 border border-transparent py-2 duration-500 md:py-4",
            !headerScrolled &&
              "border-brand-light-green rounded-full px-6 py-6",
          )}
        >
          <Link href="/">
            <Image
              src="images/logo.svg"
              alt="Logo - Dr. Online"
              width={140}
              height={25}
            />
          </Link>
          <Navigation />
          <div className="flex w-fit items-center gap-2">
            <Button
              variant={"outline"}
              className="group hidden rounded-full border-white bg-transparent px-6 py-2 duration-300 hover:bg-white md:flex"
            >
              <Link
                href="/"
                className="text-md group-hover:text-brand-main-green font-medium text-white"
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
