import { cn } from "@/lib/utils";
import React, { type ReactElement } from "react";

interface StepCardProps {
  stepNumber: number;
  content: ReactElement;
  classNames?: string;
}

export const StepCard = ({
  content,
  stepNumber,
  classNames,
}: StepCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        classNames,
      )}
    >
      <p className="bg-brand-light-green text-brand-dark-green z-[2] flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold max-sm:relative max-sm:-mb-4 lg:text-[28px]">
        {String(stepNumber)}
      </p>
      <p className="w-full rounded-2xl border border-white/20 bg-white/10 p-3 text-center text-sm leading-normal font-bold text-white max-sm:max-w-[180px] md:max-w-[150px] lg:max-w-[200px] lg:text-[16px]">
        {content}
      </p>
    </div>
  );
};
