import { Beneficios } from "@/components/trabalhe-conosco-sections/beneficios";
import { HeroWorkWithUs } from "@/components/trabalhe-conosco-sections/hero";
import { WhatWeAreLookingFor } from "@/components/trabalhe-conosco-sections/what-we-are-looking-for";
import { WorkWithUsSection2 } from "@/components/trabalhe-conosco-sections/work-with-us-2";
import { WorkWithUsSection } from "@/components/trabalhe-conosco-sections/work-with-us-section";
import { getPayload } from "payload";
import config from "@payload-config";
import React from "react";
import { OpenVacancies } from "@/components/trabalhe-conosco-sections/open-vacancies";

export default async function TrabalheConoscoPage() {
  const payload = await getPayload({ config });
  const vagas = await payload.find({
    collection: "vagas",
    limit: -1,
  });

  return (
    <>
      <HeroWorkWithUs />
      <Beneficios />
      <WorkWithUsSection />
      <WhatWeAreLookingFor />
      {vagas.totalDocs > 0 && <OpenVacancies vacancies={vagas.docs} />}
      <WorkWithUsSection2 vacancies={vagas.docs} />
    </>
  );
}
