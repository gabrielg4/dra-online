"use client";
import { useGSAP } from "@gsap/react";
import { ValuesCarousel } from "../values-carousel";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export const CompanyValues = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".s-values h2", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".s-values",
        start: "top 80%",
        end: "center 60%",
        scrub: true,
      },
    });
  }, []);
  return (
    <section className="s-values py-10 lg:py-20">
      <div className="container flex flex-col items-center lg:flex-row">
        <div className="mb-10 w-full lg:mb-0 lg:max-w-[330px]">
          <h2 className="text-center text-[32px] leading-[110%] text-white md:text-[40px] lg:text-start">
            É assim que levamos{" "}
            <span className="text-brand-light-green font-bold">
              telemedicina <br className="hidden lg:inline-block" /> de
              qualidade <br className="hidden lg:inline-block" /> para o mundo
            </span>
          </h2>
        </div>
        <div className="relative w-full lg:max-w-[100%-330px]">
          {/* <div className="from-brand-light-green to-brand-main-green absolute -right-16 bottom-32 h-[250px] w-[250px] rounded-full bg-gradient-to-b blur-3xl md:-right-20 md:-bottom-32 md:h-[380px] md:w-[380px] md:blur-[150px]" /> */}
          <ValuesCarousel />
        </div>
      </div>
    </section>
  );
};
