"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const SearchInput = () => {
  return (
    <div className="flex items-center gap-4">
      <Input
        type="text"
        placeholder="O que você está procurando?"
        className="border-white-20 h-12 rounded-full border bg-white/10 text-white shadow-2xl/30 placeholder:text-white"
      />
      <Button className="bg-brand-light-green text-brand-dark-green hover:bg-brand-light-green2 h-12 cursor-pointer rounded-full px-6 py-2 text-lg font-normal">
        Buscar
      </Button>
    </div>
  );
};
