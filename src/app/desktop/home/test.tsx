// "use client";
import React from "react";
// import useTranslation from "../../Dictionaries/hooks/useTranslation";
// import ServerSideTranslations from "../../Dictionaries/ServerSideTranslations";
import getServerTranslation from "../../Dictionaries/hooks/getServerTranslation";

const TestComponent = async () => {
  // const { t } = useTranslation("common");
  const { t } = await getServerTranslation("common");
  return <div>{t("title")}</div>;
};

export default TestComponent;
