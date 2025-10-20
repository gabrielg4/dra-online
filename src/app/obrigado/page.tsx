import { BlogCarousel } from "@/components/blog-carousel";
import Image from "next/image";
import React from "react";

export default function ObrigadoPage() {
  return (
    <>
      <section className="h-[500px] w-full overflow-hidden bg-[url(/images/img-bg-obrigado.svg)] bg-cover bg-center pt-20 md:h-[600px]">
        <div className="relative flex h-full w-full flex-col justify-end">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:-bottom-16">
            <Image
              src={"/images/gif-mascote-obg.gif"}
              alt={"Gif"}
              width={347}
              height={454}
              className="relative z-20 h-[400px] w-[340px] object-contain sm:h-full sm:w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="503"
              height="503"
              fill="none"
              viewBox="0 0 503 503"
              className="absolute -top-20 left-1/2 z-10 -translate-x-1/2 md:-top-20"
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
          <div className="to-brand-dark-green relative z-30 flex h-fit w-full flex-col items-center justify-center bg-gradient-to-b from-transparent to-80% py-10">
            <h1 className="mb-3 text-center text-[28px] leading-[110%] text-white md:text-[40px] lg:text-[48px]">
              <span className="text-brand-light-green font-bold">
                Recebemos sua mensagem!
              </span>{" "}
              <br className="hidden md:inline-block" />
              Agora é com a nossa equipe.
            </h1>
            <p className="sm::text-lg px-4 text-center text-[16px] leading-normal text-white md:text-xl">
              Em breve, um especialista da dr.online entrará em contato para{" "}
              <br className="hidden lg:inline-block" />
              entender suas necessidades e apresentar a melhor solução com a sua
              marca.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[url(/images/img-bg-section-typ.svg)] bg-cover bg-bottom py-12 lg:py-20">
        <div className="container">
          <p className="subtitle-blog text-center text-xl font-normal text-white">
            <span className="font-semibold">
              Blog dr<span className="text-brand-light-green">.</span>
            </span>{" "}
            online
          </p>
          <h2 className="title-section-blog mb-3 text-center text-[24px] leading-[110%] font-bold text-white sm:text-[32px] lg:text-[40px]">
            Enquanto espera…
          </h2>
          <p className="mb-8 text-center text-[16px] leading-normal text-white md:text-lg lg:mb-12 lg:text-xl">
            Explore nosso blog para conteúdos exclusivos sobre saúde digital e
            telemedicina.
          </p>
          <BlogCarousel />
        </div>
      </section>
    </>
  );
}
