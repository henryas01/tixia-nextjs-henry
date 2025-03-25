import HomeContainer from "@app/src/containers/desktop/home";
import ServerSideTranslations from "../../Dictionaries/ServerSideTranslations";
import Translations from "../../Dictionaries/Translations";

export default async function Page() {
  const dictionaryObj = await ServerSideTranslations(["common"]);

  return (
    <Translations _PropsTranslation={dictionaryObj}>
      <HomeContainer />
    </Translations>
  );
}
