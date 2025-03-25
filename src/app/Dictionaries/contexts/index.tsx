"use client";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

import { ContextType, ContextTypeData } from "./type";

const TranslationContext = createContext<ContextType>({
  _dataTranslation: {},
  isLoading: false,
  name: "",
  setData: () => {},
  locale: "id",
});

function TranslationContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<ContextTypeData>({
    _dataTranslation: {},
    isLoading: true,
    name: "TranslationContext",
    locale: "id",
  });

  function setData(data: ContextTypeData) {
    setState((prev) => ({
      ...prev,
      _dataTranslation: {
        ...(prev._dataTranslation || {}),
        ...data._dataTranslation,
      },
      locale: data.locale ?? "id",
      isLoading: false,
    }));
  }

  const [providerValue, setProviderValue] = useState<ContextType>({
    setData,
    ...state,
  });

  useEffect(() => {
    setProviderValue({
      setData,
      ...state,
    });
  }, [state]);

  return (
    <TranslationContext.Provider value={providerValue}>
      {children}
    </TranslationContext.Provider>
  );
}

export { TranslationContext, TranslationContextProvider };
