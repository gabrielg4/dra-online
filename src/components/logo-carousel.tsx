"use client";
import { customerLogos } from "@/utils/customers-logos";
import Image from "next/image";
import React from "react";

export const LogoCarousel = () => {
  const duplicatedLogos = [...customerLogos, ...customerLogos];

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="from-brand-dark-green absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r to-transparent"></div>
        <div className="from-brand-dark-green absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l to-transparent"></div>

        <div className="animate-scroll flex">
          {duplicatedLogos.map((logo, index) => {
            return (
              <div
                key={index}
                className="mx-8 flex h-16 w-32 flex-shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={logo}
                  alt={"Imagem Logo"}
                  width={0}
                  height={0}
                  className="h-[60px] max-h-full w-[180px] max-w-full object-contain filter transition-all duration-300 hover:filter-none"
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll-slow {
          animation: scroll-slow 30s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};
