"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { TimelineContent } from "./timeline-content";

const historyData = [
  {
    imageUrl: "/images/img-timeline-2022.webp",
    title: "Um desafio sem precedentes",
    content: (
      <>
        <p className="mb-2 text-lg text-white">
          A pandemia da COVID-19 mudou o mundo. Em meio ao medo, ao isolamento e
          às incertezas, surgiu uma necessidade urgente: garantir acesso à saúde
          com segurança e agilidade. Foi nesse cenário que nasceu a dr.online:
          como uma resposta rápida, inovadora e visionária para conectar pessoas
          e profissionais de saúde à distância.
        </p>
        <p className="text-[16px] leading-normal text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </>
    ),
  },
  {
    imageUrl: "/images/img-timeline-2022.webp",
    title: "Um desafio sem precedentes 2",
    content: (
      <>
        <p className="mb-2 text-lg text-white">
          A pandemia da COVID-19 mudou o mundo. Em meio ao medo, ao isolamento e
          às incertezas, surgiu uma necessidade urgente: garantir acesso à saúde
          com segurança e agilidade. Foi nesse cenário que nasceu a dr.online:
          como uma resposta rápida, inovadora e visionária para conectar pessoas
          e profissionais de saúde à distância.
        </p>
        <p className="text-[16px] leading-normal text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </>
    ),
  },
  {
    imageUrl: "/images/img-timeline-2022.webp",
    title: "Um desafio sem precedentes 3",
    content: (
      <>
        <p className="mb-2 text-lg text-white">
          A pandemia da COVID-19 mudou o mundo. Em meio ao medo, ao isolamento e
          às incertezas, surgiu uma necessidade urgente: garantir acesso à saúde
          com segurança e agilidade. Foi nesse cenário que nasceu a dr.online:
          como uma resposta rápida, inovadora e visionária para conectar pessoas
          e profissionais de saúde à distância.
        </p>
        <p className="text-[16px] leading-normal text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </>
    ),
  },
  {
    imageUrl: "/images/img-timeline-2022.webp",
    title: "Um desafio sem precedentes 3",
    content: (
      <>
        <p className="mb-2 text-lg text-white">
          A pandemia da COVID-19 mudou o mundo. Em meio ao medo, ao isolamento e
          às incertezas, surgiu uma necessidade urgente: garantir acesso à saúde
          com segurança e agilidade. Foi nesse cenário que nasceu a dr.online:
          como uma resposta rápida, inovadora e visionária para conectar pessoas
          e profissionais de saúde à distância.
        </p>
        <p className="text-[16px] leading-normal text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </>
    ),
  },
];

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
          width="57"
          height="9"
          viewBox="0 0 57 9"
          className={cn(
            "fill-[#A6D05D]", // cor padrão (verde)
            activeTime >= 3 && "fill-white", // fica branco quando activeTime === 2
          )}
        >
          <path d="M56.853 4.955a.5.5 0 0 0 0-.708l-3.181-3.182a.5.5 0 1 0-.707.708L55.793 4.6l-2.828 2.828a.5.5 0 1 0 .707.707l3.181-3.181ZM.5 4.6v.5h56v-1H.5v.5Z" />
        </svg>
      </div>
      <div>
        {historyData.map((data, index) => (
          <TimelineContent
            key={index}
            imageUrl={data.imageUrl}
            title={data.title}
            content={data.content}
            isActive={activeTime !== index ? true : false}
          />
        ))}
      </div>
    </div>
  );
};
