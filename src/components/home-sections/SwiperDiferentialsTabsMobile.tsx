"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/effect-cards";
import { Button } from "@/components/ui/button";

export default function SwiperTabsMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentSwiper, setContentSwiper] = useState<SwiperType | null>(null);
  const [tabsSwiper, setTabsSwiper] = useState<SwiperType | null>(null);

  // Simplifique o handleSlideClick:
  const handleSlideClicks = (index: number) => {
    setActiveIndex(index);
    if (contentSwiper) {
      contentSwiper.slideTo(index);
    }
  };

  return (
    <div className="hidden max-sm:block">
      <Swiper
        modules={[Grid, Pagination]}
        slidesPerView="auto"
        spaceBetween={8}
        grid={{
          rows: 2,
          fill: "row",
        }}
        className="mb-14 !overflow-visible"
      >
        <SwiperSlide className="!h-auto !w-auto">
          <button
            onClick={() => handleSlideClicks(0)}
            className={`rounded-2xl border px-3 py-1 text-center text-sm font-semibold whitespace-nowrap duration-300 ease-in-out ${
              activeIndex === 0
                ? "border-[#1BA068] bg-[#1BA068] text-white"
                : "border-brand-light-green text-brand-dark-green bg-white hover:border-[#1BA068] hover:bg-[#1BA068] hover:text-white"
            }`}
          >
            Entrevista Qualificada
          </button>
        </SwiperSlide>

        <SwiperSlide className="!h-auto !w-auto">
          <button
            onClick={() => handleSlideClicks(1)}
            className={`rounded-2xl border px-3 py-1 text-center text-sm font-semibold whitespace-nowrap duration-300 ease-in-out ${
              activeIndex === 1
                ? "border-[#1BA068] bg-[#1BA068] text-white"
                : "border-brand-light-green text-brand-dark-green bg-white hover:border-[#1BA068] hover:bg-[#1BA068] hover:text-white"
            }`}
          >
            Pronto Atendimento 24h
          </button>
        </SwiperSlide>

        <SwiperSlide className="!h-auto !w-auto">
          <button
            onClick={() => handleSlideClicks(2)}
            className={`rounded-2xl border px-3 py-1 text-center text-sm font-semibold whitespace-nowrap duration-300 ease-in-out ${
              activeIndex === 2
                ? "border-[#1BA068] bg-[#1BA068] text-white"
                : "border-brand-light-green text-brand-dark-green bg-white hover:border-[#1BA068] hover:bg-[#1BA068] hover:text-white"
            }`}
          >
            Consultas Eletivas com Especialistas
          </button>
        </SwiperSlide>

        <SwiperSlide className="!h-auto !w-auto">
          <button
            onClick={() => handleSlideClicks(3)}
            className={`rounded-2xl border px-3 py-1 text-center text-sm font-semibold whitespace-nowrap duration-300 ease-in-out ${
              activeIndex === 3
                ? "border-[#1BA068] bg-[#1BA068] text-white"
                : "border-brand-light-green text-brand-dark-green bg-white hover:border-[#1BA068] hover:bg-[#1BA068] hover:text-white"
            }`}
          >
            Saúde Mental
          </button>
        </SwiperSlide>

        <SwiperSlide className="!h-auto !w-auto">
          <button
            onClick={() => handleSlideClicks(4)}
            className={`rounded-2xl border px-3 py-1 text-center text-sm font-semibold whitespace-nowrap duration-300 ease-in-out ${
              activeIndex === 4
                ? "border-[#1BA068] bg-[#1BA068] text-white"
                : "border-brand-light-green text-brand-dark-green bg-white hover:border-[#1BA068] hover:bg-[#1BA068] hover:text-white"
            }`}
          >
            Gestão Integrada do Cuidado
          </button>
        </SwiperSlide>

        <SwiperSlide className="!h-auto !w-auto">
          <button
            onClick={() => handleSlideClicks(5)}
            className={`rounded-2xl border px-3 py-1 text-center text-sm font-semibold whitespace-nowrap duration-300 ease-in-out ${
              activeIndex === 5
                ? "border-[#1BA068] bg-[#1BA068] text-white"
                : "border-brand-light-green text-brand-dark-green bg-white hover:border-[#1BA068] hover:bg-[#1BA068] hover:text-white"
            }`}
          >
            Espaço de Saúde Conectada
          </button>
        </SwiperSlide>
      </Swiper>

      <Swiper
        modules={[EffectCards, Pagination]}
        effect="cards"
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        cardsEffect={{
          slideShadows: true,
          perSlideOffset: 5, // Cards ainda mais visíveis
          perSlideRotate: 0, // Rotação mais pronunciada
        }}
        onSwiper={setContentSwiper}
        onSlideChange={(swiper) => {
          const newIndex = swiper.activeIndex;
          setActiveIndex(newIndex);

          // Sincroniza a navegação dos botões
          if (tabsSwiper) {
            if (newIndex > 1) {
              const columnIndex = Math.floor(newIndex / 2);
              tabsSwiper.slideTo(columnIndex - 1, 500);
            } else {
              tabsSwiper.slideTo(0, 500);
            }
          }
        }}
        className="swiper-cards-effect pb-12 [&_.swiper-slide:not(.swiper-slide-active)]:opacity-70 [&_.swiper-slide:not(.swiper-slide-active)]:blur-[4px]"
      >
        <SwiperSlide>
          <div className="bg-brand-main-green flex w-full flex-col items-center gap-5 rounded-2xl p-4">
            <div className="w-full max-w-full">
              <p className="text-center text-[22px] leading-[130%] font-bold text-white">
                Entrevista Qualificada
              </p>
              <h3 className="mb-4 text-center text-base text-white">
                Mais segurança, menos riscos.
              </h3>
              <p className="text-center text-sm text-white">
                Na saúde suplementar, cada detalhe faz diferença. Transforma
                dados em decisões assertivas, reduzindo riscos jurídicos,
                desperdícios e garantindo conformidade regulatória.
              </p>
            </div>

            <div className="area-video relative">
              <div className="relative w-full md:w-1/2">
                <Image
                  src={"/images/ic-arrow-up.svg"}
                  alt=""
                  width={48}
                  height={48}
                  className="absolute top-4 right-4"
                />
                <video
                  src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/Mi%CC%81dia4.mp4"
                  autoPlay
                  controls={false}
                  muted
                  loop
                  className="pointer-events-none h-[200px] w-full rounded-3xl object-cover md:h-[370px] lg:h-[477px]"
                ></video>
              </div>

              <Button
                variant="outline"
                className="group hover:bg-brand-main-green absolute right-0 bottom-4 left-0 mx-auto table w-full max-w-[281px] rounded-full bg-white p-0 duration-300"
              >
                <Link
                  href="/solucao/entrevista-qualificada"
                  className="text-brand-dark-green px-4 py-3 text-sm font-medium duration-300"
                >
                  Conheça mais
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-brand-dark-green flex w-full flex-col items-center gap-5 rounded-2xl p-4">
            <div className="w-full max-w-full">
              <p className="text-center text-[22px] leading-[130%] font-bold text-white">
                Pronto Atendimento 24hs
              </p>
              <h3 className="mb-4 text-center text-base text-white">
                O cuidado certo, na hora que seu beneficiário mais precisa.
              </h3>
              <p className="text-center text-sm text-white">
                Imprevistos não têm hora marcada. Por isso, a Dr. Online garante
                que o acesso a um médico nunca esteja fora de alcance. Nosso{" "}
                <strong>Pronto Atendimento 24h</strong> conecta pacientes a
                clínicos e pediatras em poucos minutos, sem filas, sem
                burocracia e com <strong>mais de 92% de resolutividade.</strong>
              </p>
            </div>

            <div className="area-video relative">
              <div className="relative w-full md:w-1/2">
                <Image
                  src={"/images/ic-arrow-up.svg"}
                  alt=""
                  width={48}
                  height={48}
                  className="absolute top-4 right-4"
                />
                <video
                  src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/Mi%CC%81dia5.mp4"
                  autoPlay
                  controls={false}
                  muted
                  loop
                  className="pointer-events-none h-[200px] w-full rounded-3xl object-cover md:h-[370px] lg:h-[477px]"
                ></video>
              </div>

              <Button
                variant="outline"
                className="group hover:bg-brand-main-green absolute right-0 bottom-4 left-0 mx-auto table w-full max-w-[281px] rounded-full bg-white p-0 duration-300"
              >
                <Link
                  href="/solucao/pronto-atendimento"
                  className="text-brand-dark-green px-4 py-3 text-sm font-medium duration-300"
                >
                  Conheça mais
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-brand-light-green flex w-full flex-col items-center gap-5 rounded-2xl p-4">
            <div className="w-full max-w-full">
              <p className="text-center text-[22px] leading-[130%] font-bold text-white">
                Consulta Eletivas com Especialistas
              </p>
              <h3 className="mb-4 text-center text-base text-white">
                Transforme o acesso em cuidado. E o cuidado em resultado.
              </h3>
              <p className="text-center text-sm text-white">
                Com apenas um clique garanta acesso rápido e qualificado há mais
                de <strong>30 especialistas</strong>, sem comprometer custos,
                estrutura ou qualidade.
              </p>
            </div>

            <div className="area-video relative">
              <div className="relative w-full md:w-1/2">
                <Image
                  src={"/images/ic-arrow-up.svg"}
                  alt=""
                  width={48}
                  height={48}
                  className="absolute top-4 right-4"
                />
                <video
                  src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Especialidades/1015.mp4"
                  autoPlay
                  controls={false}
                  muted
                  loop
                  className="pointer-events-none h-[200px] w-full rounded-3xl object-cover md:h-[370px] lg:h-[477px]"
                ></video>
              </div>

              <Button
                variant="outline"
                className="group hover:bg-brand-main-green absolute right-0 bottom-4 left-0 mx-auto table w-full max-w-[281px] rounded-full bg-white p-0 duration-300"
              >
                <Link
                  href="/solucao/consulta-eletiva-com-especialistas"
                  className="text-brand-dark-green px-4 py-3 text-sm font-medium duration-300"
                >
                  Conheça mais
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-brand-main-green flex w-full flex-col items-center gap-5 rounded-2xl p-4">
            <div className="w-full max-w-full">
              <p className="text-center text-[22px] leading-[130%] font-bold text-white">
                Saúde Mental
              </p>
              <h3 className="mb-4 text-center text-base text-white">
                Apoio imediato para quem precisa, resultados estratégicos para
                quem cuida.
              </h3>
              <p className="text-center text-sm text-white">
                Oferecemos um ecossistema completo de{" "}
                <strong>saúde mental digital</strong>, através do{" "}
                <strong>Teleacolhimento Psicológico 24h</strong> e do{" "}
                <strong>Integralmente</strong>, que conectam ciência, tecnologia
                e cuidado humano para gerar impacto real.
              </p>
            </div>

            <div className="area-video relative">
              <div className="relative w-full md:w-1/2">
                <Image
                  src={"/images/ic-arrow-up.svg"}
                  alt=""
                  width={48}
                  height={48}
                  className="absolute top-4 right-4"
                />
                <video
                  src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/grok-video-839cfd47-de63-4bfc-a796-68d082bc23a0.mp4"
                  autoPlay
                  controls={false}
                  muted
                  loop
                  className="pointer-events-none h-[200px] w-full rounded-3xl object-cover md:h-[370px] lg:h-[477px]"
                ></video>
              </div>

              <Button
                variant="outline"
                className="group hover:bg-brand-main-green absolute right-0 bottom-4 left-0 mx-auto table w-full max-w-[281px] rounded-full bg-white p-0 duration-300"
              >
                <Link
                  href="/solucao/saude-mental"
                  className="text-brand-dark-green px-4 py-3 text-sm font-medium duration-300"
                >
                  Conheça mais
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-brand-dark-green flex w-full flex-col items-center gap-5 rounded-2xl p-4">
            <div className="w-full max-w-full">
              <p className="text-center text-[22px] leading-[130%] font-bold text-white">
                Gestão Integrada do Cuidado
              </p>
              <h3 className="mb-4 text-center text-base text-white">
                Mais que cuidado, gestão inteligente em saúde.
              </h3>
              <p className="text-center text-sm text-white">
                Combinamos tecnologia, protocolos clínicos e equipe altamente
                qualificada para garantir resolutividade, continuidade e
                personalização do atendimento.
              </p>
            </div>

            <div className="area-video relative">
              <div className="relative w-full md:w-1/2">
                <Image
                  src={"/images/ic-arrow-up.svg"}
                  alt=""
                  width={48}
                  height={48}
                  className="absolute top-4 right-4"
                />
                <video
                  src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/envato_video_gen_Oct_08_2025_17_12_32.mp4"
                  autoPlay
                  controls={false}
                  muted
                  loop
                  className="pointer-events-none h-[200px] w-full rounded-3xl object-cover md:h-[370px] lg:h-[477px]"
                ></video>
              </div>

              <Button
                variant="outline"
                className="group hover:bg-brand-main-green absolute right-0 bottom-4 left-0 mx-auto table w-full max-w-[281px] rounded-full bg-white p-0 duration-300"
              >
                <Link
                  href="/solucao/gestao-integrada-ao-cuidado"
                  className="text-brand-dark-green px-4 py-3 text-sm font-medium duration-300"
                >
                  Conheça mais
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-brand-light-green flex w-full flex-col items-center gap-5 rounded-2xl p-4">
            <div className="w-full max-w-full">
              <p className="text-center text-[22px] leading-[130%] font-bold text-white">
                Espaço de Saúde Conectada
              </p>
              <h3 className="mb-4 text-center text-base text-white">
                Uma nova forma de entregar saúde: acessível, segura, integrada e
                altamente escalável.
              </h3>
              <p className="text-center text-sm text-white">
                Equipado com dispositivos médicos multiparamétricos e suporte de
                enfermagem, possibilita consultas clínicas e especializadas com
                alto nível de resolutividade e precisão diagnóstica, mesmo à
                distância.
              </p>
            </div>

            <div className="area-video relative">
              <div className="relative w-full md:w-1/2">
                <Image
                  src={"/images/ic-arrow-up.svg"}
                  alt=""
                  width={48}
                  height={48}
                  className="absolute top-4 right-4"
                />
                <video
                  src="/videos/video6.mp4"
                  autoPlay
                  controls={false}
                  muted
                  loop
                  className="pointer-events-none h-[200px] w-full rounded-3xl object-cover md:h-[370px] lg:h-[477px]"
                ></video>
              </div>

              <Button
                variant="outline"
                className="group hover:bg-brand-main-green absolute right-0 bottom-4 left-0 mx-auto table w-full max-w-[281px] rounded-full bg-white p-0 duration-300"
              >
                <Link
                  href="/solucao/gestao-integrada-ao-cuidado"
                  className="text-brand-dark-green px-4 py-3 text-sm font-medium duration-300"
                >
                  Conheça mais
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
