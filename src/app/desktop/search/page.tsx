import SearchContainer from "@app/src/containers/desktop/search";
import axios from "axios";
import ServerSideTranslations from "../../Dictionaries/ServerSideTranslations";
import Translations from "../../Dictionaries/Translations";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    city?: number;
    date?: string;
    countOfVisitor?: string;
  }>;
}) {
  const searchParamsObj = await searchParams;
  const city = searchParamsObj.city || "Unknown";
  const date = searchParamsObj.date || "Not Selected";
  const countOfVisitor = parseInt(searchParamsObj?.countOfVisitor || "1");
  const { data } = await axios.get(
    `https://ota-gin.onrender.com/api/v1/hotels/search?city_id=${city}&date=${date}&rooms_count=${countOfVisitor}`
  );

  const dictionaryObj = await ServerSideTranslations(["common"]);

  return (
    <Translations _PropsTranslation={dictionaryObj}>
      <SearchContainer data={data?.data ?? {}} />
    </Translations>
  );
}
