"use client";
import { useGSAP } from "@gsap/react";
import { WheelCarousel } from "../animated-sections/wheel-carousel";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const Midia = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-section-midia", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#midia",
        start: "top 80%",
        end: "top top",
        scrub: 3,
        // markers: true,
      },
    });
    // gsap.from(".title-section-midia", {
    //   scale: 0,
    //   opacity: 0,
    //   duration: 1.2,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: "#midia",
    //     start: "top 80%",
    //     end: "top top",
    //     scrub: 3,
    //     // markers: true,
    //   },
    // });
  }, []);

  return (
    <section
      id="midia"
      className="relative bg-[url('/images/img-bg-midia.svg')] bg-cover bg-center md:py-14 lg:py-20"
    >
      <div className="absolute top-[calc(50%+40px)] left-1/2 h-[340px] w-[340px] -translate-x-1/2 bg-[url('/images/ic-circle-blur-overlay.svg')] bg-contain bg-center md:h-[529px] md:w-[529px]" />
      <div className="relative z-10 container">
        <h2 className="title-section-midia max-[767px]:h3 display text-center font-normal text-white">
          <span className="font-semibold">
            dr<span className="text-brand-light-green">.</span>
          </span>
          online
          <br />
          <span className="font-semibold">na mídia</span>
        </h2>
      </div>
      <WheelCarousel />
    </section>
  );
};
