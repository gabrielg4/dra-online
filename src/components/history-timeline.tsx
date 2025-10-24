"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { TimelineContent } from "./timeline-content";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const historyData = {
  "2022": [
    {
      videoUrl: "/videos/video-tl-4.mp4",
      title: "Um desafio sem precedentes",
      content: (
        <>
          <p className="text-lg text-white">
            A pandemia da COVID-19 mudou o mundo. Em meio ao medo, ao isolamento
            e às incertezas, surgiu uma necessidade urgente: garantir acesso à
            saúde com segurança e agilidade. Foi nesse cenário que nasceu a Dr.
            Online: como uma resposta rápida, inovadora e visionária para
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
            A telemedicina deixou de ser tendência e se tornou realidade. A Dr.
            Online assumiu papel de destaque, levando médicos e especialistas
            para dentro das casas dos pacientes, com atendimento seguro,
            resolutivo e humanizado.
          </p>
        </>
      ),
    },
  ],
  "2023": [
    {
      videoUrl: "/videos/video-tl-6.mp4",
      title: "De telemedicina a ecossistema de saúde digital",
      content: (
        <>
          <p className="text-lg text-white">
            A Dr. Online cresceu, evoluiu e deixou de ser apenas uma solução de
            telemedicina. Tornou-se um{" "}
            <strong>ecossistema completo de saúde</strong> digital, oferecendo
            não só pronto atendimento médico, mas também saúde mental, consultas
            eletivas, coordenação do cuidado e inovação em modelos como o{" "}
            <strong>Consultório Digital</strong>.
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
            Alcançamos mais de <strong>3 milhões de vidas expostas</strong> aos
            nossos produtos, consolidando nossa presença no mercado e{" "}
            <strong> ampliando o acesso à saúde</strong>
            digital em todo o Brasil.
          </p>
        </>
      ),
    },
  ],
  "2024": [
    {
      videoUrl: "/videos/video-tl-2.mp4",
      title: "Inovação em escala",
      content: (
        <>
          <p className="text-lg text-white">
            <strong>Digitais</strong>, aproximando ainda mais a tecnologia de
            quem mais precisa e expandindo a rede de cuidado com qualidade e
            segurança.
          </p>
        </>
      ),
    },
  ],
  "2025": [
    {
      videoUrl: "/videos/video-tl-7.mp4",
      title: "Um marco histórico",
      content: (
        <>
          <p className="text-lg text-white">
            Batemos a marca de <strong>10 milhões de vidas alcançadas</strong>.
            Esse crescimento reafirma nossa posição como{" "}
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
            Hoje, a Dr. Online é parceira estratégica de{" "}
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
  const [activeTime, setActiveTime] = useState(0);

  const handleSelectTimelineItem = (value: number) => {
    setActiveTime(value);
  };

  useGSAP(() => {
    const buttons = gsap.utils.toArray<HTMLElement>(".button-tl");
    const lines = gsap.utils.toArray<HTMLElement>(".line-tl");

    gsap.from(".button-tl", {
      xPercent: -100,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".s-timeline",
        start: "top 70%",
      },
    });
    gsap.from(".line-tl", {
      xPercent: -100,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".s-timeline",
        start: "top 70%",
      },
    });

    // Anima os botões
    buttons.forEach((button, index) => {
      // Cria ou pega o elemento de preenchimento
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

        // Garante que o texto fique acima do preenchimento
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
        // Botões anteriores: 100% preenchido
        gsap.to(fill, {
          width: "100%",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(button, {
          borderColor: "#A6D05D",
          color: "#1A3A1A",
          duration: 0.4,
        });
      } else if (index === activeTime) {
        // Botão atual: preenche progressivamente de 0 a 100%
        gsap.fromTo(
          fill,
          { width: "0%" },
          {
            width: "100%",
            duration: 0.4,
            ease: "power2.inOut",
            // delay: index * 0.1,
          },
        );
        gsap.to(button, {
          borderColor: "#A6D05D",
          color: "#1A3A1A",
          duration: 0.4,
          // delay: index * 0.1,
        });
      } else {
        // Botões futuros: volta ao estado inicial
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
      // Cria ou pega o elemento de preenchimento da linha
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
        // Linhas anteriores: preenchidas
        gsap.to(lineFill, {
          width: "100%",
          duration: 0.4,
          ease: "power2.inOut",
          // delay: index * 0.1 + 0.3,
        });
      } else {
        // Linhas futuras: vazias
        gsap.to(lineFill, {
          width: "0%",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  }, [activeTime]);

  return (
    <div className="rounded-xl bg-white/10 p-5 md:p-10">
      <div className="mb-8 flex items-center justify-center md:mb-14">
        <button
          onClick={() => handleSelectTimelineItem(0)}
          className="button-tl hover:border-brand-light-green hover:bg-brand-light-green hover:text-brand-dark-green cursor-pointer rounded-full border border-white px-4 py-2 text-[20px] leading-[130%] font-bold text-white duration-300"
        >
          2022
        </button>
        <div className="line-tl h-[0.5px] w-14 bg-white" />
        <button
          onClick={() => handleSelectTimelineItem(1)}
          className="button-tl hover:border-brand-light-green hover:bg-brand-light-green hover:text-brand-dark-green cursor-pointer rounded-full border border-white px-4 py-2 text-[20px] leading-[130%] font-bold text-white duration-300"
        >
          2023
        </button>
        <div className="line-tl h-[0.5px] w-14 bg-white" />
        <button
          onClick={() => handleSelectTimelineItem(2)}
          className="button-tl hover:border-brand-light-green hover:bg-brand-light-green hover:text-brand-dark-green cursor-pointer rounded-full border border-white px-4 py-2 text-[20px] leading-[130%] font-bold text-white duration-300"
        >
          2024
        </button>
        <div className="line-tl h-[0.5px] w-14 bg-white" />
        <button
          onClick={() => handleSelectTimelineItem(3)}
          className="button-tl hover:border-brand-light-green hover:bg-brand-light-green hover:text-brand-dark-green cursor-pointer rounded-full border border-white px-4 py-2 text-[20px] leading-[130%] font-bold text-white duration-300"
        >
          2025
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={57}
          height={9}
          viewBox="0 0 57 9"
          className={cn(
            "line-tl fill-white transition-all duration-200",
            activeTime >= 3 && "fill-[#A6D05D]",
          )}
        >
          <path d="M56.853 4.955a.5.5 0 0 0 0-.708l-3.181-3.182a.5.5 0 1 0-.707.708L55.793 4.6l-2.828 2.828a.5.5 0 1 0 .707.707l3.181-3.181ZM.5 4.6v.5h56v-1H.5v.5Z" />
        </svg>
      </div>
      <div>
        <TimelineContent
          historyData={historyData["2022"]}
          isActive={activeTime !== 0 ? true : false}
        />
        <TimelineContent
          historyData={historyData["2023"]}
          isActive={activeTime !== 1 ? true : false}
        />
        <TimelineContent
          historyData={historyData["2024"]}
          isActive={activeTime !== 2 ? true : false}
        />
        <TimelineContent
          historyData={historyData["2025"]}
          isActive={activeTime !== 3 ? true : false}
        />
      </div>
    </div>
  );
};
