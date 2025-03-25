"use client";
import { TranslationContext } from "@app/src/app/Dictionaries/contexts";
import { PropsWithChildren, useContext, useEffect } from "react";
import { Locale } from "./type";

type TranslationsProps = {
  _PropsTranslation: {};
  locale?: Locale;
} & PropsWithChildren;

const Translations = ({
  _PropsTranslation,
  locale,
  children,
}: TranslationsProps) => {
  const { setData } = useContext(TranslationContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setTimeout(() => {
        if (_PropsTranslation) {
          setData({
            _dataTranslation: _PropsTranslation,
          });
        }

        if (locale) {
          setData({
            locale,
          });
        }
      }, 10);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_PropsTranslation]);

  return children;
};

export default Translations;
