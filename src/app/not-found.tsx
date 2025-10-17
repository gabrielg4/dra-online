import { CtaButton } from "@/components/cta-button";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <section className="w-full overflow-hidden bg-[url(/images/img-bg-404.svg)] bg-cover bg-center py-48">
      <div className="relative flex h-full w-full flex-col items-center justify-end">
        <div className="relative">
          <Image
            src={"/images/gif-mascote-404.gif"}
            alt={"Gif"}
            width={300}
            height={300}
            className="relative z-20 object-contain"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="503"
            height="503"
            fill="none"
            viewBox="0 0 503 503"
            className="absolute -top-20 -left-36 z-10 md:-top-14 md:-left-20"
          >
            <g filter="url(#a)">
              <circle
                cx="251.5"
                cy="251.5"
                r="151.5"
                fill="url(#b)"
                transform="matrix(0 -1 1 0 0 503)"
              />
            </g>
            <defs>
              <linearGradient
                id="b"
                x1="251.5"
                x2="251.5"
                y1="100"
                y2="403"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1BA068" />
                <stop offset="1" stopColor="#A6D05D" />
              </linearGradient>
              <filter
                id="a"
                width="503"
                height="503"
                x="0"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_3686_4586"
                  stdDeviation="50"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="to-brand-dark-green absolute bottom-0 left-0 z-30 flex h-fit w-full flex-col items-center justify-center bg-gradient-to-b from-transparent pt-40 pb-2">
          <h1 className="mb-3 text-center text-[28px] leading-[110%] text-white md:text-[40px] lg:text-[48px]">
            Ops… Essa página está offline,
            <br className="hidden md:inline-block" />
            <span className="font-bold">mas o dr. está sempre Online!</span>
          </h1>
          <p className="mb-10 text-center text-lg leading-normal text-white md:mb-14 md:text-xl">
            Desculpe, mas a página que você tentou acessar pode ter sido movida,
            <br className="hidden lg:inline-block" />
            renomeada ou não existe mais. Vamos ajudá-lo a voltar ao caminho
            certo!
          </p>

          <CtaButton title="Falar com nosso time" url="/" />
        </div>
      </div>
    </section>
  );
}
