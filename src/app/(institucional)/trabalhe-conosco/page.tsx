import { Beneficios } from "@/components/trabalhe-conosco-sections/beneficios";
import { HeroWorkWithUs } from "@/components/trabalhe-conosco-sections/hero";
import { WhatWeAreLookingFor } from "@/components/trabalhe-conosco-sections/what-we-are-looking-for";
import { WorkWithUsSection2 } from "@/components/trabalhe-conosco-sections/work-with-us-2";
import { WorkWithUsSection } from "@/components/trabalhe-conosco-sections/work-with-us-section";
import React from "react";

export default function TrabalheConoscoPage() {
  return (
    <>
      <HeroWorkWithUs />
      <Beneficios />
      <WorkWithUsSection />
      <WhatWeAreLookingFor />
      {/* <OpenVacancies /> */}
      <WorkWithUsSection2 />
    </>
  );
}
