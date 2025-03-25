import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Provider from "./ContextManagement/Provider";
import Translations from "./Dictionaries/Translations";
import { getLocale } from "./Dictionaries/Dictionaries";
import ServerSideTranslations from "./Dictionaries/ServerSideTranslations";

export const metadata: Metadata = {
  title: "Tixia Nextjs Henry",
  description: "Tixia Nextjs Henry",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dictionaryObj = await ServerSideTranslations(["common"]);

  return (
    <html translate="no" lang="id">
      <body>
        <AppRouterCacheProvider>
          <Provider>
            <Translations _PropsTranslation={dictionaryObj} locale={locale}>
              {children}
            </Translations>
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
