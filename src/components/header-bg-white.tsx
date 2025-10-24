"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile/mobile-menu";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { NavigationV2 } from "./navigationV2";
import { usePathname } from "next/navigation";
export const HeaderBgWhite = () => {
  const pathname = usePathname();
  const [headerScrolled, setHeaderScrolled] = useState(false);
  useGSAP(() => {
    const st = ScrollTrigger.create({
      trigger: "header",
      start: "top 20%",
      onToggle: (self) => {
        setHeaderScrolled(!self.isActive);
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  // useEffect(() => {
  //   if (pathname.includes("/blog")) {
  //     setHiddenHeader(true);
  //   }
  //   console.log(pathname);
  // }, []);

  return (
    <div className={cn("fixed top-0 z-50 w-full pt-5 duration-500")}>
      <div className="container">
        <header
          className={cn(
            "border-brand-main-green flex w-full items-center justify-between gap-5 rounded-full border px-6 py-4 duration-500 md:py-4",
            headerScrolled && "bg-white",
          )}
        >
          <Link href="/">
            <Image
              src="/images/logo-bg-white.svg"
              alt="Logo - Dr. Online"
              width={140}
              height={25}
            />
          </Link>
          {/* <Navigation textColor="text-[#282F3B]" /> */}
          <NavigationV2 textColor="#282F3B" />
          <div className="flex w-fit items-center gap-2">
            <Button
              variant={"outline"}
              className={cn(
                "group border-brand-main-green hover:bg-brand-main-green hidden rounded-full bg-transparent px-6 py-2 duration-300 md:flex",
                // isOnBgWhite && "border-brand-main-green",
              )}
            >
              <Link
                href="/"
                className={cn(
                  "text-md text-brand-main-green font-medium group-hover:text-white",
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
