"use client";
import { createContext, JSX, useMemo, useState } from "react";

import { ContextType, ContextTypeData } from "./ContextTypeData";

type Props = { children?: JSX.Element };

const HomeContext = createContext<ContextType>({
  city: 0,
  date: "",
  countOfVisitor: 0,
  setData: () => {},
});

const defaultValue = {
  city: 0,
  date: "",
  countOfVisitor: 0,
};

function HomeProvider({ children }: Props) {
  const [findHotel, setHotel] = useState<ContextTypeData>({
    city: 0,
    date: "",
    countOfVisitor: 0,
  });

  function setData(data: ContextTypeData, resetAll?: boolean) {
    if (resetAll) {
      setHotel((prev) => ({
        ...prev,
        ...defaultValue,
      }));
    } else {
      setHotel((prev) => ({
        ...prev,
        ...data,
      }));
    }
  }

  const providerValue = useMemo(
    () => ({
      setData,
      ...findHotel,
    }),
    [findHotel]
  );

  return (
    <HomeContext.Provider value={providerValue}>
      {children}
    </HomeContext.Provider>
  );
}

export { HomeContext, HomeProvider };
