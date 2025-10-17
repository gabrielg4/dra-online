import React from "react";
import { VacancieCard } from "./cards/vacancie-card";

export const VacanciesGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <VacancieCard />
      <VacancieCard />
      <VacancieCard />
      <VacancieCard />
    </div>
  );
};
