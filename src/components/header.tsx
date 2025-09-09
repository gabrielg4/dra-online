"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "./navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

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
        "z-50 fixed top-0 left-0 w-full duration-500",
        !headerScrolled && "pt-5",
        headerScrolled && "pt-0 bg-brand-dark-green"
      )}
    >
      <div className="container">
        <header
          className={cn(
            "flex items-center justify-between gap-5 py-4  duration-500 border border-transparent",
            !headerScrolled &&
              "rounded-full  border-brand-light-green px-6 py-6"
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
          <div className="flex items-center gap-5">
            {/* MENU MOBILE */}
            <Button
              variant={"outline"}
              className="rounded-full py-2 px-6 bg-transparent border-white group hover:bg-white duration-300"
            >
              <Link
                href="/"
                className="text-white font-medium text-md group-hover:text-brand-main-green"
              >
                Área do cliente
              </Link>
            </Button>
          </div>
        </header>
      </div>
    </div>
  );
};
