import { useEffect, useRef } from "react";

export function useSafeAutoplay(active = true) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!active || !videoRef.current) return;

    const video = videoRef.current;

    const tryPlay = () => {
      video
        .play()
        .then(() => {
          // ok
        })
        .catch(() => {
          // autoplay bloqueado ou falha silenciosa
          forceReload();
        });
    };

    const forceReload = () => {
      video.pause();
      video.currentTime = 0;
      video.load();

      setTimeout(() => {
        tryPlay();
      }, 300);
    };

    // Se após 1.5s não carregou nada → reload
    const watchdog = setTimeout(() => {
      if (video.readyState === 0) {
        forceReload();
      }
    }, 1500);

    tryPlay();

    return () => clearTimeout(watchdog);
  }, [active]);

  return videoRef;
}
