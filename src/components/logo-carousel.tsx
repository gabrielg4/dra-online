"use client";
import React from "react";

export const LogoCarousel = () => {
  // Logos de exemplo - substitua pelos seus logos reais
  const logos = [
    "/images/customers-logos/Logo.svg",
    "/images/customers-logos/Logo-1.svg",
    "/images/customers-logos/Logo-2.svg",
    "/images/customers-logos/Logo-3.svg",
    "/images/customers-logos/Logo-4.svg",
    "/images/customers-logos/Logo-5.svg",
  ];

  // Duplicamos os logos para criar o efeito infinito
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Gradiente para suavizar as bordas */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-brand-dark-green to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-brand-dark-green to-transparent z-10"></div>

        {/* Carrossel animado */}
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center  transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo}
                alt={logo}
                className="max-w-full max-h-full object-contain filter hover:filter-none transition-all duration-300"
              />
            </div>
          ))}
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
          animation: scroll-slow 20s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};
