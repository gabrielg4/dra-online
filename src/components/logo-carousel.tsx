"use client";
import { customerLogos } from "@/utils/customers-logos";
import Image from "next/image";
import React from "react";

export const LogoCarousel = () => {
  // Duplicar logos suficientes vezes para garantir loop suave
  const duplicatedLogos = [...customerLogos];

  return (
    <div className="relative overflow-hidden">
      {/* Gradientes nas bordas */}
      <div className="from-brand-dark-green absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r to-transparent"></div>
      <div className="from-brand-dark-green absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l to-transparent"></div>

      {/* Container do carrossel */}
      <div className="flex">
        <div className="animate-scroll logo-grid">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="mx-8 flex h-16 w-32 flex-shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={180}
                height={60}
                className="h-auto max-h-full w-auto max-w-full object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 120s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Desktop: Uma linha */
        .logo-grid {
          display: flex;
        }

        /* Mobile: Duas linhas com offset */
        @media (max-width: 768px) {
          .logo-grid {
            gap: 1rem 0;
          }
        }
      `}</style>
    </div>
  );
};
