"use client";

import React, { cloneElement, PropsWithChildren, ReactElement } from "react";

import { TranslationContextProvider } from "../Dictionaries/contexts";
import { HomeProvider } from "@app/src/modules/home/contexts";

const RnsProvider = ({ children }: PropsWithChildren) => {
  // Last In First Out
  const providerList: ReactElement[] = [
    // High Priority, place on the bottom
    <TranslationContextProvider key="translation" />,
    <HomeProvider key="home" />,
  ];

  let content = children || null;
  providerList.forEach((provider) => {
    content = cloneElement(provider, {}, content);
  });

  return content;
};

export default RnsProvider;
