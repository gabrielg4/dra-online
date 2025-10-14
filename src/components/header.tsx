"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Navigation } from "./navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile/mobile-menu";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export const Header = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  // const [isOnBgWhite, setIsOnBgWhite] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50 && !headerScrolled) {
  //       setHeaderScrolled(true);
  //     } else if (window.scrollY <= 50) {
  //       setHeaderScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [headerScrolled]);

  useGSAP(() => {
    new ScrollTrigger({
      trigger: "header",
      start: "top 50px",
      toggleClass: "bg-black/10 backdrop-blur-3xl",
    });
  }, []);

  return (
    <div className={cn("fixed top-0 z-50 w-full pt-5 duration-500")}>
      <div className="container">
        <header
          className={cn(
            "border-brand-light-green flex w-full items-center justify-between gap-5 rounded-full border px-6 py-6 duration-500 md:py-4",
            headerScrolled && "bg-black/10 backdrop-blur-3xl",
          )}
        >
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo - Dr. Online"
              width={140}
              height={25}
            />
          </Link>
          <Navigation />
          <div className="flex w-fit items-center gap-2">
            <Button
              variant={"outline"}
              className={cn(
                "group hidden rounded-full border-white bg-transparent px-6 py-2 duration-300 hover:bg-white md:flex",
                // isOnBgWhite && "border-brand-main-green",
              )}
            >
              <Link
                href="/"
                className={cn(
                  "text-md group-hover:text-brand-main-green font-medium text-white",
                  // isOnBgWhite && "text-brand-main-green",
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
