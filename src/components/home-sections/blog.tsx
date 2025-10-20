"use client";

import React from "react";
import { BlogCarousel } from "../blog-carousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const Blog = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-section-blog", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#blog",
        start: "top 80%",
        end: "top top",
        scrub: 3,
        // markers: true,
      },
    });

    const subtitleSplit = new SplitText(".subtitle-blog", {
      type: "chars, words",
    });
    gsap.from(subtitleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.3,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: "#blog",
        start: "top 80%",
      },
    });
    gsap.from(".blog-wrapper", {
      scale: 0,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#blog",
        start: "center 80%",
        end: "top 10%",
        scrub: 5,
        // markers: true,
      },
    });
  }, []);

  return (
    <section id="blog" className="relative pb-10 lg:pb-14">
      {/* <div className="na-midia-blur absolute -top-40 left-1/2 h-[340px] -translate-x-1/2" /> */}

      <div className="relative z-10 container">
        <p className="subtitle-blog text-center text-xl font-normal text-white">
          <span className="font-semibold">
            Blog dr<span className="text-brand-light-green">.</span>
          </span>{" "}
          online
        </p>
        <h2 className="title-section-blog mb-8 text-center text-[24px] leading-[110%] font-bold text-white sm:text-[32px] lg:mb-12 lg:text-[40px]">
          <span className="font-normal">Tudo sobre</span> saúde digital,
          inovação e telemedicina
        </h2>
        <div className="blog-wrapper">
          <BlogCarousel />
        </div>
      </div>
    </section>
  );
};
