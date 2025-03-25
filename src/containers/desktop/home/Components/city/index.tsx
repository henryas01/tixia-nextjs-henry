import "server-only";

import { FormControl } from "@mui/material";
import axios from "axios";
import SelectCity from "./SelectCity";
import { Suspense } from "react";

const City = async () => {
  const { data } = await axios.get(
    "https://ota-gin.onrender.com/api/v1/cities"
  );
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <SelectCity listCity={data?.data ?? []} />
      </FormControl>
    </Suspense>
  );
};
export default City;
