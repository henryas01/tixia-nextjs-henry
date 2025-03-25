import "server-only";

import { headers } from "next/headers";
import DynamicDictionaryLoader from "./DynamicDictionaryLoader";
import { GetDictionaryProps, Locale, LOCALES } from "./type";

export const getDictionary = async ({ locale, module }: GetDictionaryProps) => {
  if (
    DynamicDictionaryLoader[locale] &&
    DynamicDictionaryLoader[locale][module]
  ) {
    return await DynamicDictionaryLoader[locale][module]();
  } else {
    throw new Error(
      `Dictionary or module "${module}" for locale "${locale}" is not found`
    );
  }
};

// Function to get the locale from the headers
export const getLocale: () => Promise<Locale> = async (): Promise<Locale> => {
  const headersList = await headers();
  const lang = headersList.get("accept-language");
  const acceptLanguage = lang?.slice(0, 2) as Locale; // Type it as a Locale

  return LOCALES.includes(acceptLanguage) ? acceptLanguage : "en"; // Default to "en" if not found
};
