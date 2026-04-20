"use client";
import React, { createContext, useContext, useState } from "react";
import { translations } from "@/lib/data";

type Lang = "en" | "bn";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: string) => translations[lang]?.[key] || translations["en"]?.[key] || key;
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
