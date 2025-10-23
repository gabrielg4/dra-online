"use client";
import React, { type ReactElement } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { CardSolucaoImpacto } from "../cards/card-solucao-impacto";
import { cn } from "@/lib/utils";

interface ImpactsSectionProps {
  impacts: {
    title: string;
    description: string;
    isColumn?: boolean;
    icon: {
      src: string;
      alt: string;
    };
  }[];
  title: ReactElement;
  customClassNames?: string;
}

export const Impacts = ({
  title,
  impacts,
  customClassNames,
}: ImpactsSectionProps) => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });
  const isSmartphone = useMediaQuery({
    maxWidth: 767,
  });

  const start = `top ${isTablet ? "80%" : isSmartphone ? "50%" : "50%"}`;

  useGSAP(() => {
    const titleSplit = new SplitText(".impacts-section h2", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".impacts-section",
        start,
      },
    });
    gsap.from(".impacts-section .section-subtitle ", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".impacts-section",
        start,
      },
    });
  }, []);

  return (
    <section className="impacts-section py-10 lg:py-14">
      <div className="container">
        <h2 className="md:10 mb-6 text-center text-[28px] leading-[110%] text-white md:text-[32px] lg:mb-14 lg:text-[40px]">
          {title}
        </h2>
        <div
          className={cn(
            "grid grid-cols-1 gap-4 md:grid-cols-2",
            customClassNames,
          )}
        >
          {impacts.map((impact, index) => (
            <CardSolucaoImpacto
              key={index}
              title={impact.title}
              description={impact.description}
              isColumn={impact.isColumn}
              image={{
                alt: impact.icon.alt,
                src: impact.icon.src,
              }}
            />
          ))}
        </div>
        {/* <ImpactsCarousel
          impacts={impacts}
          customClassNames={customClassNames}
        /> */}
      </div>
    </section>
  );
};
