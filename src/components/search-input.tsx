"use client";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleSearch = () => {
    if (inputRef.current) {
      const currentValue = inputRef.current.value;
      inputRef.current.value = "";
      router.push(`/blog?search=${currentValue}`);
    }
  };
  return (
    <div className="flex items-center gap-4">
      <Input
        ref={inputRef}
        type="text"
        placeholder="O que você está procurando?"
        className="border-white-20 h-12 rounded-full border bg-white/10 text-white shadow-2xl/30 placeholder:text-white max-sm:text-center max-sm:text-sm"
      />
      <Button
        onClick={handleSearch}
        className="bg-brand-light-green text-brand-dark-green hover:bg-brand-light-green2 h-12 cursor-pointer rounded-full px-6 py-2 text-lg font-normal max-sm:px-3 max-sm:text-base"
      >
        Buscar
      </Button>
    </div>
  );
};
