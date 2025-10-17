import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { type ReactElement } from "react";

interface TimelineContentProps {
  isActive: boolean;
  title: string;
  content: ReactElement;
  imageUrl: string;
}

export const TimelineContent = ({
  isActive,
  content,
  imageUrl,
  title,
}: TimelineContentProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 lg:flex-row lg:gap-10",
        isActive && "hidden",
      )}
    >
      <div className="flex w-full items-center lg:w-1/2">
        <Image
          src={imageUrl}
          alt={title}
          width={540}
          height={330}
          className="mx-auto lg:mx-0"
        />
      </div>
      <div className="flex w-full flex-col lg:w-1/2">
        <h2 className="text-brand-light-green mb-5 text-2xl font-bold md:text-[28px] lg:mb-6">
          {title}
        </h2>
        {content}
      </div>
    </div>
  );
};
