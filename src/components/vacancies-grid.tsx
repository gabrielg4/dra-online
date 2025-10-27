import React from "react";
import { VacancieCard } from "./cards/vacancie-card";
import type { Vagas } from "../../payload-types";

interface VacanciesGridProps {
  vacancies: Vagas[];
}

export const VacanciesGrid = ({ vacancies }: VacanciesGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {vacancies.map((vacancie) => (
        <VacancieCard key={vacancie.id} vacancie={vacancie} />
      ))}
    </div>
  );
};
