import { Box } from "@mui/material";
import React from "react";
import HeaderBar from "./components/header";
import HotelSearchResults from "./components/content";
import { SearchHotelsResponse } from "@app/src/modules/search/types/Hotels";

type SearchContainerProps = {
  data?: SearchHotelsResponse;
};

const SearchContainer = ({ data }: SearchContainerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        padding: "40px",
        alignItems: "center",
      }}
    >
      <HeaderBar />
      <HotelSearchResults data={data?.data ?? []} />
    </Box>
  );
};

export default SearchContainer;
