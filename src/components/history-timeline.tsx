"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { TimelineContent } from "./timeline-content";

const historyData = {
  "2022": [
    {
      imageUrl: "/images/img-2022-timeline.webp",
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
  ],
  "2023": [
    {
      imageUrl: "/images/img-timeline-2023-1.webp",
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
      imageUrl: "/images/img-timeline-2023-2.webp",
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
      imageUrl: "/images/img-timeline-2024.webp",
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
      imageUrl: "/images/img-timeline-2025-1.webp",
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
      imageUrl: "/images/img-timeline-2025-2.webp",
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

  return (
    <div className="rounded-xl bg-white/10 p-5 md:p-10">
      <div className="mb-8 flex items-center justify-center md:mb-14">
        <button
          onClick={() => handleSelectTimelineItem(0)}
          className={cn(
            "border-brand-light-green text-brand-light-green cursor-pointer rounded-full border px-4 py-2 text-[20px] leading-[130%] hover:border-white hover:text-white",
            activeTime >= 0 && "border-white text-white",
          )}
        >
          2022
        </button>
        <div
          className={cn(
            "bg-brand-light-green h-[0.5px] w-14",
            activeTime >= 0 && "bg-white",
          )}
        />
        <button
          onClick={() => handleSelectTimelineItem(1)}
          className={cn(
            "border-brand-light-green text-brand-light-green leading-[130%]hover:border-white cursor-pointer rounded-full border px-4 py-2 text-[20px] hover:border-white hover:text-white",
            activeTime >= 1 && "border-white text-white",
          )}
        >
          2023
        </button>
        <div
          className={cn(
            "bg-brand-light-green h-[0.5px] w-14",
            activeTime >= 1 && "bg-white",
          )}
        />
        <button
          onClick={() => handleSelectTimelineItem(2)}
          className={cn(
            "border-brand-light-green text-brand-light-green leading-[130%]hover:border-white cursor-pointer rounded-full border px-4 py-2 text-[20px] hover:border-white hover:text-white",
            activeTime >= 2 && "border-white text-white",
          )}
        >
          2024
        </button>
        <div
          className={cn(
            "bg-brand-light-green h-[0.5px] w-14",
            activeTime >= 2 && "bg-white",
          )}
        />
        <button
          onClick={() => handleSelectTimelineItem(3)}
          className={cn(
            "border-brand-light-green text-brand-light-green leading-[130%]hover:border-white cursor-pointer rounded-full border px-4 py-2 text-[20px] hover:border-white hover:text-white",
            activeTime >= 3 && "border-white text-white",
          )}
        >
          2025
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={57}
          height={9}
          viewBox="0 0 57 9"
          className={cn(
            "fill-[#A6D05D] transition-all duration-200",
            activeTime >= 3 && "fill-white",
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
