"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  from?: number;
  to?: number;
  duration?: number;
  decimals?: number;
  scroll: {
    trigger: string;
    start: string;
    end?: string;
  };
};

export default function Counter({
  from = 0,
  to = 100,
  duration = 2,
  decimals = 0,
  scroll,
}: Props) {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const valueRef = useRef({ val: from }); // objeto mutável para GSAP

  useEffect(() => {
    if (!elRef.current) return;

    // Mata animações anteriores no mesmo objeto, se houver
    gsap.killTweensOf(valueRef.current);

    const tween = gsap.to(valueRef.current, {
      val: to,
      duration,
      ease: "power1.out",
      onUpdate: () => {
        const v = valueRef.current.val;
        const formatted =
          decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
        if (elRef.current) elRef.current.textContent = formatted;
      },
      scrollTrigger: {
        trigger: scroll.trigger,
        start: scroll.start,
        end: scroll.end,
      },
    });

    // Inicializa com o valor 'from'
    elRef.current.textContent =
      decimals > 0 ? from.toFixed(decimals) : Math.round(from).toString();

    return () => {
      tween.kill();
    };
  }, [from, to, duration, decimals, scroll.start, scroll.end, scroll.trigger]);

  return <span ref={elRef} aria-live="polite" />;
}
