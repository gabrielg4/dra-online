"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { TimelineContent } from "./timeline-content";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { CarouselApi } from "./ui/carousel";

const historyData = {
  "2022": [
    {
      videoUrl:
        "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Sobre%20No%CC%81s%20/LINHA%20DO%20TEMPO/grok-video-7bd34633-1dfa-46cb-8584-392f5b153736.mp4",
      title: "Um desafio sem precedentes",
      content: (
        <>
          <p className="text-lg text-white">
            A pandemia da COVID-19 mudou o mundo. Em meio ao medo, ao isolamento
            e às incertezas, surgiu uma necessidade urgente: garantir acesso à
            saúde com segurança e agilidade. Foi nesse cenário que nasceu a{" "}
            <strong>dr.</strong>
            online: como uma resposta rápida, inovadora e visionária para
            conectar pessoas e profissionais de saúde à distância.
          </p>
        </>
      ),
    },
    {
      videoUrl: "/videos/video-tl-3.mp4",
      title: "Telemedicina como protagonista",
      content: (
        <>
          <p className="text-lg text-white">
            A telemedicina deixou de ser tendência e se tornou realidade. A{" "}
            <strong>dr.</strong>
            online assumiu papel de destaque, levando médicos e especialistas
            para dentro das casas dos pacientes, com atendimento seguro,
            resolutivo e humanizado.
          </p>
        </>
      ),
    },
  ],
  "2023": [
    {
      videoUrl:
        "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Sobre%20No%CC%81s%20/LINHA%20DO%20TEMPO/grok-video-a652e640-3696-4d53-945b-91fb5f4e6592.mp4",
      title: "De telemedicina a ecossistema de saúde digital",
      content: (
        <>
          <p className="text-lg text-white">
            A <strong>dr.</strong> online cresceu, evoluiu e deixou de ser
            apenas uma solução de telemedicina. Tornou-se um{" "}
            <strong>ecossistema completo de saúde</strong> digital, oferecendo
            não só pronto atendimento médico, mas também saúde mental, consultas
            eletivas, coordenação do cuidado e inovação em modelos como o{" "}
            <strong>Espaço Saúde</strong>.
          </p>
        </>
      ),
    },
    {
      videoUrl: "/videos/video-tl-5.mp4",
      title: "Expansão acelerada",
      content: (
        <>
          <p className="text-lg text-white">
            Inauguramos nosso novo escritório em São Paulo e ampliamos nossa
            sede em Brasília. Alcançamos mais de{" "}
            <strong>3 milhões de vidas expostas</strong> aos nossos produtos,
            consolidando nossa presença no mercado e{" "}
            <strong>ampliando o acesso à saúde </strong> digital em todo o
            Brasil
          </p>
        </>
      ),
    },
  ],
  "2024": [
    {
      videoUrl:
        "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Sobre%20No%CC%81s%20/LINHA%20DO%20TEMPO/envato_video_gen_Oct_22_2025_17_33_19.mp4",
      title: "Inovação em escala",
      content: (
        <>
          <p className="text-lg text-white">
            Chegamos a <strong>mais de 7 milhões de vidas atendidas</strong> e
            inauguramos <strong>mais de 35 Consultórios Digitais</strong>,
            aproximando ainda mais a tecnologia de quem mais precisa e
            expandindo a rede de cuidado com qualidade e segurança.
          </p>
        </>
      ),
    },
  ],
  "2025": [
    {
      videoUrl:
        "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Sobre%20No%CC%81s%20/LINHA%20DO%20TEMPO/grok-video-e701f89d-4a25-410c-a9fd-13ce8fa76688.mp4",
      title: "Um marco histórico",
      content: (
        <>
          <p className="text-lg text-white">
            Batemos a marca de <strong>10 milhões de vidas alcançadas</strong>.
            Esse crescimento reafirmou e reforçou nossa posição como{" "}
            <strong>referência nacional em saúde digital</strong> e reforça o
            propósito que nos move desde o início: tornar o cuidado em saúde
            mais humano, acessível e inteligente.
          </p>
        </>
      ),
    },
    {
      videoUrl: "/videos/video-tl-1.mp4",
      title: "Seguimos Transformando a saúde no Brasil",
      content: (
        <>
          <p className="text-lg text-white">
            Hoje, a <strong>dr.</strong> online é parceira estratégica de{" "}
            <strong>
              operadoras, empresas e milhões de pessoas em todo o país
            </strong>
            . Seguimos impulsionando a transformação digital da saúde, sempre
            com o mesmo propósito que nos move desde o início:{" "}
            <strong>
              tornar o cuidado mais humano, acessível e eficiente.
            </strong>
          </p>
        </>
      ),
    },
  ],
};

export const HistoryTimeline = () => {
  // Extrai os anos dinamicamente do historyData
  const years = Object.keys(historyData);
  const totalYears = years.length;
  const maxYearIndex = totalYears - 1;

  const [activeTime, setActiveTime] = useState(0);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressIndicatorRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Refs para armazenar as APIs dos carrosséis (dinâmico)
  const carouselApis = useRef<(CarouselApi | undefined)[]>(
    new Array(totalYears).fill(undefined),
  );

  // Detecta se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSelectTimelineItem = (value: number) => {
    setActiveTime(value);
  };

  // Função para calcular o ano baseado na posição do clique/drag
  const updateYearFromPosition = (clientX: number) => {
    if (!progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const year = Math.round(percentage * maxYearIndex); // Dinâmico

    setActiveTime(year);
  };

  // Handlers para mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateYearFromPosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateYearFromPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handlers para touch
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateYearFromPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      updateYearFromPosition(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Função para navegar para o próximo ano
  const handleNextYear = () => {
    if (activeTime < maxYearIndex) {
      const nextYear = activeTime + 1;
      setActiveTime(nextYear);

      setTimeout(() => {
        carouselApis.current[nextYear]?.scrollTo(0);
      }, 100);
    }
  };

  // Função para navegar para o ano anterior
  const handlePreviousYear = () => {
    if (activeTime > 0) {
      const previousYear = activeTime - 1;
      setActiveTime(previousYear);

      setTimeout(() => {
        const api = carouselApis.current[previousYear];
        if (api) {
          const lastIndex = api.scrollSnapList().length - 1;
          api.scrollTo(lastIndex);
        }
      }, 100);
    }
  };

  // Função para registrar a API de cada carrossel
  const registerCarouselApi = (index: number, api: CarouselApi) => {
    carouselApis.current[index] = api;
  };

  useGSAP(() => {
    const buttons = gsap.utils.toArray<HTMLElement>(".button-tl");
    const lines = gsap.utils.toArray<HTMLElement>(".line-tl");

    // Anima os botões
    buttons.forEach((button, index) => {
      let fill = button.querySelector(".button-fill") as HTMLElement;
      if (!fill) {
        fill = document.createElement("div");
        fill.className = "button-fill";
        fill.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background-color: #A6D05D;
          border-radius: 9999px;
          z-index: 0;
        `;
        button.style.position = "relative";
        button.style.overflow = "hidden";
        button.insertBefore(fill, button.firstChild);

        const textContent = button.childNodes;
        textContent.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const span = document.createElement("span");
            span.style.position = "relative";
            span.style.zIndex = "10";
            span.textContent = node.textContent;
            button.replaceChild(span, node);
          }
        });
      }

      if (index < activeTime) {
        gsap.to(fill, {
          width: "100%",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(button, {
          borderColor: "#A6D05D",
          color: "#fff",
          duration: 0.4,
        });
      } else if (index === activeTime) {
        gsap.fromTo(
          fill,
          { width: "0%" },
          {
            width: "100%",
            duration: 0.4,
            ease: "power2.inOut",
          },
        );
        gsap.to(button, {
          borderColor: "#A6D05D",
          color: "#1A3A1A",
          duration: 0.4,
        });
      } else {
        gsap.to(fill, {
          width: "0%",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(button, {
          borderColor: "white",
          color: "white",
          duration: 0.3,
        });
      }
    });

    // Anima as linhas
    lines.forEach((line, index) => {
      let lineFill = line.querySelector(".line-fill") as HTMLElement;
      if (!lineFill) {
        lineFill = document.createElement("div");
        lineFill.className = "line-fill";
        lineFill.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background-color: #A6D05D;
        `;
        line.style.position = "relative";
        line.style.overflow = "hidden";
        line.appendChild(lineFill);
      }

      if (index < activeTime) {
        gsap.to(lineFill, {
          width: "100%",
          duration: 0.4,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(lineFill, {
          width: "0%",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });

    // Anima a barra de progresso (APENAS MOBILE) - Dinâmico
    if (isMobile && progressFillRef.current && progressIndicatorRef.current) {
      const percentage = (activeTime / maxYearIndex) * 100;

      gsap.to(progressFillRef.current, {
        width: `${percentage}%`,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(progressIndicatorRef.current, {
        left: `${percentage}%`,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [activeTime, isMobile, maxYearIndex]);

  return (
    <div className="rounded-xl bg-white/10 p-0 max-sm:bg-transparent md:p-10">
      <div className="relative mb-8 flex items-center justify-between max-sm:flex md:mb-14 md:justify-center">
        {/* Linha contínua de fundo - APENAS MOBILE */}
        <div className="absolute top-1/2 left-0 z-0 hidden h-[0.5px] w-full -translate-y-1/2 bg-white max-sm:block" />

        {years.map((year, index) => (
          <React.Fragment key={year}>
            <button
              onClick={() => handleSelectTimelineItem(index)}
              className="button-tl hover:border-brand-light-green hover:bg-brand-light-green hover:text-brand-dark-green max-sm:bg-brand-dark-green relative z-10 cursor-pointer rounded-full border border-white px-4 py-2 text-[20px] leading-[130%] font-bold text-white duration-300 max-sm:p-3 max-sm:text-sm max-sm:!text-white"
            >
              {year}
            </button>
            {index < maxYearIndex && (
              <div className="line-tl h-[0.5px] w-14 bg-white max-sm:hidden md:block" />
            )}
          </React.Fragment>
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={57}
          height={9}
          viewBox="0 0 57 9"
          className={cn(
            "line-tl relative z-10 fill-white transition-all duration-200 max-sm:w-4 md:block",
            activeTime >= maxYearIndex && "fill-[#A6D05D]",
          )}
        >
          <path d="M56.853 4.955a.5.5 0 0 0 0-.708l-3.181-3.182a.5.5 0 1 0-.707.708L55.793 4.6l-2.828 2.828a.5.5 0 1 0 .707.707l3.181-3.181ZM.5 4.6v.5h56v-1H.5v.5Z" />
        </svg>
      </div>

      {/* Barra de progresso interativa - APENAS MOBILE */}
      {isMobile && (
        <div
          ref={progressBarRef}
          className="relative mb-8 h-8 w-full cursor-pointer md:hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute top-1/2 left-0 h-1 w-full -translate-y-1/2 overflow-hidden rounded-full bg-white/20">
            <div
              ref={progressFillRef}
              className="absolute top-0 left-0 h-full w-0 rounded-full bg-[#A6D05D]"
            />
          </div>

          <div
            ref={progressIndicatorRef}
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
          >
            <div className="h-4 w-8 rounded-full bg-[#A6D05D] shadow-lg transition-transform hover:scale-110" />
          </div>
        </div>
      )}

      <div>
        {years.map((year, index) => (
          <TimelineContent
            key={year}
            yearIndex={index}
            historyData={historyData[year as keyof typeof historyData]}
            isActive={activeTime !== index}
            onNextYear={handleNextYear}
            onPreviousYear={handlePreviousYear}
            isFirstYear={activeTime === 0}
            isLastYear={activeTime === maxYearIndex}
            onApiReady={registerCarouselApi}
          />
        ))}
      </div>
    </div>
  );
};
