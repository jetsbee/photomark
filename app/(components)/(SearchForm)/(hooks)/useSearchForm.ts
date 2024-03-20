"use client";

import { useSearchStore } from "@/app/(states)/(client)/(search)/hooks";
import { useRef } from "react";

export const useSearchForm = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const { setSearchText } = useSearchStore();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!textInputRef.current?.value) {
      textInputRef.current?.focus();
      return;
    }
    setSearchText(textInputRef.current.value.replace(" ", "%20"));
    textInputRef.current.value = "";
  };

  return { handleFormSubmit, textInputRef };
};
