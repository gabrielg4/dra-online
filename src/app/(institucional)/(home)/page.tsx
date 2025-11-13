import { getPayload } from "payload";
import config from "@payload-config";

import { Hero } from "@/components/home-sections/hero";
import { CompaniesLogos } from "@/components/home-sections/companies-logos";
import { Diferentials } from "@/components/home-sections/diferentials";
import CompanyProblems from "@/components/home-sections/CompanyProblems";
import { MetricsSection } from "@/components/home-sections/metrics";
import { SecurityInformation } from "@/components/home-sections/security-information";
import { Midia } from "@/components/home-sections/midia";
import { Blog } from "@/components/home-sections/blog";
import { FrequentlyQuestions } from "@/components/home-sections/frequently-questions";
import { GetInTouch } from "@/components/home-sections/get-in-touch";

export default async function Home() {
  const payload = await getPayload({ config });

  const [articles, featuredPosts] = await Promise.all([
    await payload.find({
      collection: "na-midia",
      limit: 5,
    }),
    await payload.find({
      collection: "blog",
      limit: 3,
      where: {
        e_destaque: {
          equals: "Sim",
        },
      },
    }),
  ]);

  return (
    <>
      <Hero />
      <CompaniesLogos />
      <CompanyProblems />
      <Diferentials />
      <MetricsSection />
      <SecurityInformation />
      <Midia articles={articles.docs} />
      <Blog featuredPosts={featuredPosts.docs} />
      <FrequentlyQuestions />
      <GetInTouch />
    </>
  );
}
