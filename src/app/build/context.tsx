"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { CustomizerDeck, CustomizerMetal, CustomizerWheel } from "@/data/types";

type CustomizerControlsContext = {
  selectedWheel?: CustomizerWheel;
  setWheel: (wheel: CustomizerWheel) => void;
  selectedDeck?: CustomizerDeck;
  setDeck: (deck: CustomizerDeck) => void;
  selectedTruck?: CustomizerMetal;
  setTruck: (trucks: CustomizerMetal) => void;
  selectedBolt?: CustomizerMetal;
  setBolt: (bolts: CustomizerMetal) => void;
};

const defaultContext: CustomizerControlsContext = {
  setWheel: () => {},
  setDeck: () => {},
  setTruck: () => {},
  setBolt: () => {},
};

const CustomizerControlsContext = createContext(defaultContext);

type CustomizerControlsProviderProps = {
  defaultWheel?: CustomizerWheel;
  defaultDeck?: CustomizerDeck;
  defaultTruck?: CustomizerMetal;
  defaultBolt?: CustomizerMetal;
  children?: ReactNode;
};

export function CustomizerControlsProvider({
  defaultWheel,
  defaultDeck,
  defaultTruck,
  defaultBolt,
  children,
}: CustomizerControlsProviderProps) {
  const [selectedWheel, setWheel] = useState(defaultWheel);
  const [selectedDeck, setDeck] = useState(defaultDeck);
  const [selectedTruck, setTruck] = useState(defaultTruck);
  const [selectedBolt, setBolt] = useState(defaultBolt);

  const value = useMemo(() => {
    return {
      selectedWheel,
      setWheel,
      selectedDeck,
      setDeck,
      selectedTruck,
      setTruck,
      selectedBolt,
      setBolt,
    };
  }, [selectedWheel, selectedDeck, selectedTruck, selectedBolt]);

  return (
    <CustomizerControlsContext.Provider value={value}>
      {children}
    </CustomizerControlsContext.Provider>
  );
}

export function useCustomizerControls() {
  return useContext(CustomizerControlsContext);
}
