"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface VerticalCarouselAboutUsProps {
  videosColumn1: string[];
  videosColumn2: string[];
  videosColumn3: string[];
}

export const VerticalCarouselAboutUs = ({
  videosColumn1,
  videosColumn2,
  videosColumn3,
}: VerticalCarouselAboutUsProps) => {
  const scope = useRef<HTMLDivElement | null>(null);

  // Garantir que todos os vídeos estejam mutados
  useEffect(() => {
    if (scope.current) {
      const videos = scope.current.querySelectorAll("video");
      videos.forEach((video) => {
        video.muted = true;
        video.volume = 0;
        // Força o atributo muted no DOM
        video.setAttribute("muted", "");
      });
    }
  }, [videosColumn1, videosColumn2, videosColumn3]);

  useGSAP(
    () => {
      const columns = gsap.utils.toArray<HTMLElement>(
        ".animation-columns .coluna",
      );

      columns.forEach((col, i) => {
        const original = Array.from(col.children) as HTMLElement[];
        const clone = original.map((el) => el.cloneNode(true) as HTMLElement);
        clone.forEach((c) => col.appendChild(c));

        // Garantir que vídeos clonados também estejam mutados
        const clonedVideos = clone.flatMap((el) =>
          Array.from(el.querySelectorAll("video")),
        );
        clonedVideos.forEach((video) => {
          video.muted = true;
          video.volume = 0;
          video.setAttribute("muted", "");
        });

        const singleHeight = original.reduce(
          (acc, el) => acc + el.offsetHeight + getGap(el),
          0,
        );

        const speeds = [20, -35, 26];
        const speed = speeds[i % speeds.length];
        const duration = singleHeight / Math.abs(speed);

        gsap.set(col, { y: speed < 0 ? -singleHeight : 0 });

        gsap.to(col, {
          y: speed < 0 ? 0 : -singleHeight,
          duration,
          ease: "none",
          repeat: -1,
        });
      });

      function getGap(el: HTMLElement) {
        const style = window.getComputedStyle(el);
        const mb = parseFloat(style.marginBottom || "0");
        const mt = parseFloat(style.marginTop || "0");
        return mb + mt;
      }
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      className="animation-columns absolute top-0 -right-24 z-10 grid w-full max-w-[500px] grid-cols-3 gap-4 overflow-hidden max-sm:-right-0 max-sm:left-0 max-sm:mx-auto max-sm:max-w-[360px] lg:right-0 lg:max-w-[728px] lg:gap-5"
    >
      <div className="coluna coluna1 flex flex-col gap-8 will-change-transform max-sm:gap-4">
        {videosColumn1.map((video, index) => (
          <div key={index} className="video-masked">
            <video
              src={video}
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline
              preload="auto"
              controlsList="nodownload nofullscreen noremoteplayback"
            ></video>
          </div>
        ))}
      </div>

      <div className="coluna coluna2 flex flex-col gap-8 will-change-transform max-sm:gap-4">
        {videosColumn2.map((video, index) => (
          <div key={index} className="video-masked">
            <video
              src={video}
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline
              preload="auto"
              controlsList="nodownload nofullscreen noremoteplayback"
            ></video>
          </div>
        ))}
      </div>

      <div className="coluna coluna3 flex-col gap-8 will-change-transform max-sm:gap-4 lg:flex">
        {videosColumn3.map((video, index) => (
          <div key={index} className="video-masked">
            <video
              src={video}
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline
              preload="auto"
              controlsList="nodownload nofullscreen noremoteplayback"
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
};
