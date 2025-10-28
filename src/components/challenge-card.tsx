import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { type ComponentProps } from "react";

interface ChallengeCardProps extends ComponentProps<"div"> {
  imageUrl?: string;
  videoUrl?: string;
  label: string;
}

export const ChallengeCard = ({
  imageUrl,
  label,
  videoUrl,
  ...props
}: ChallengeCardProps) => {
  return (
    <div
      {...props}
      className={cn(
        "challenge-card w-full max-w-[312px] rounded-2xl border border-white/20 bg-white/20 p-4 backdrop-blur-2xl md:min-h-[350px] md:max-w-[360px] md:p-6",
        props.className,
      )}
    >
      {videoUrl && (
        <video
          autoPlay
          muted
          playsInline
          loop
          className="mx-auto mb-4 h-[200px] w-[360px] rounded-2xl object-cover md:mb-6 md:h-[280px]"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Placeholder"
          width={312}
          height={280}
          className="mx-auto mb-4 h-[200px] rounded-2xl object-cover md:mb-6 md:h-[280px]"
        />
      )}
      <p className="text-md text-center leading-[130%] font-bold text-white sm:text-xl">
        {label}
      </p>
    </div>
  );
};
