import HotelDetailContainer from "@app/src/containers/desktop/hotel";
import ServerSideTranslations from "../../Dictionaries/ServerSideTranslations";
import Translations from "../../Dictionaries/Translations";

export default async function Page() {
  const dictionaryObj = await ServerSideTranslations(["common"]);

  return (
    <Translations _PropsTranslation={dictionaryObj}>
      <HotelDetailContainer />;
    </Translations>
  );
}
