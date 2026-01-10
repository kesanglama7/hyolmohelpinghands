"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import DonatePopup from "@/components/shared/donate-popup";

type DonateSource =
  | "header"
  | "footer"
  | "hero"
  | "about"
  | "works"
  | "custom";

type DonateContextValue = {
  openDonate: (source?: DonateSource) => void;
  closeDonate: () => void;
  isOpen: boolean;
  source: DonateSource | null;
};

const DonateContext = createContext<DonateContextValue | undefined>(undefined);

export function DonateProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<DonateSource | null>(null);
  

  const value = useMemo<DonateContextValue>(
    () => ({
      isOpen,
      source,
      openDonate: (src = "custom") => {
        setSource(src);
        setIsOpen(true);
      },
      closeDonate: () => {
        setIsOpen(false);
        setSource(null);
      },
    }),
    [isOpen, source]
  );

  return (
    <DonateContext.Provider value={value}>
      {children}

      {/* global modal */}
      <DonatePopup isOpen={isOpen} onClose={value.closeDonate} />
    </DonateContext.Provider>
  );
}

export function useDonate() {
  const ctx = useContext(DonateContext);
  if (!ctx) throw new Error("useDonate must be used within DonateProvider");
  return ctx;
}
