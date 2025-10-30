"use client";
import { useGSAP } from "@gsap/react";
import { WheelCarousel } from "../animated-sections/wheel-carousel";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import type { NaMidia } from "../../../payload-types";

interface MidiaProps {
  articles: NaMidia[];
}

export const Midia = ({ articles }: MidiaProps) => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-section-midia", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#midia",
        start: "top 90%",
        end: "top top",
        scrub: 3,
        // markers: true,
      },
    });
  }, []);

  return (
    <section
      id="midia"
      className="relative pt-10 max-[640px]:overflow-hidden md:pt-10"
    >
      <div className="relative z-10 container">
        <h2 className="title-section-midia md:display h-auto text-center !text-[40px] leading-[110%] font-normal text-white sm:!text-[48px]">
          <div className="mx-auto w-fit max-[639px]:!text-[28px]">
            <span className="font-semibold">
              dr<span className="text-brand-light-green">.</span>
            </span>
            online
          </div>
          {/* <br className="hidden sm:inline-block" /> */}
          <span className="font-semibold">na mídia</span>
        </h2>
      </div>
      <WheelCarousel articles={articles} />
    </section>
  );
};
