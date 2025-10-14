import React, { type ReactNode } from "react";

interface TimelineCardProps {
  year: number;
  title: string;
  children: ReactNode;
}

export const TimelineCard = ({ children, title, year }: TimelineCardProps) => {
  return (
    <div className="">
      <div className="border-b-brand-light-green relative border-b pb-6">
        <p className="text-brand-light-green text-[48px] font-bold">{year}</p>
        <div className="bg-brand-light-green absolute -bottom-[6px] left-8 h-3 w-3 rounded-full" />
      </div>
      <div className="py-6 sm:pr-5 lg:pr-8">
        <h3 className="mb-2 text-xl leading-[130%] font-bold text-white lg:text-2xl">
          {title}
        </h3>
        <p className="text-sm leading-normal text-white">{children}</p>
      </div>
    </div>
  );
};
