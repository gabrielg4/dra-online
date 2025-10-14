import React from "react";
import { FAQ } from "../faq";

export const FrequentlyQuestions = () => {
  return (
    <section id="faq" className="relative py-10 md:py-14">
      <div className="relative z-10 container">
        <FAQ />
      </div>
      {/* <div className="absolute -bottom-[30%] left-0 h-[565px] w-[440px] -translate-x-1/2 rotate-[-37deg] rounded-[300px] bg-[url('/images/ic-rounded-overlay.svg')] bg-contain bg-center bg-no-repeat opacity-50 md:w-[1078px]" /> */}
      {/* <div className="blur-1 absolute -bottom-[200px] -left-[846px] md:-left-[536px]"></div> */}
    </section>
  );
};
