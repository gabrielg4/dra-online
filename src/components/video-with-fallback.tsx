"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type VideoWithFallbackProps = {
  src: string;
  fallbackVideo?: string;
  fallbackImage?: string;
  className?: string;
};

export function VideoWithFallback({
                                    src,
                                    fallbackVideo,
                                    fallbackImage,
                                    className,
                                  }: VideoWithFallbackProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const watchdog = setTimeout(() => {
      if (video.readyState === 0) {
        setShowFallback(true);
      }
    }, 1500);

    video
      .play()
      .catch(() => {
        setShowFallback(true);
      });

    return () => clearTimeout(watchdog);
  }, []);

  if (showFallback) {
    return (
      <video
        src={fallbackVideo}
        poster={fallbackImage}
        autoPlay
        controls={false}
        muted
        loop
        preload="auto"
        playsInline
        controlsList="nodownload nofullscreen noremoteplayback"
        className={className}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      controls={false}
      muted
      loop
      preload="auto"
      playsInline
      controlsList="nodownload nofullscreen noremoteplayback"
      className={className}
      onError={() => setShowFallback(true)}
    />
  );
}
