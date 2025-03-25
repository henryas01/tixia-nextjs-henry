import { Box } from "@mui/material";
import React from "react";
import HeaderBar from "./components/header";
import HotelDetail from "./components/content";

const HotelDetailContainer = () => {
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
      <HotelDetail />
    </Box>
  );
};

export default HotelDetailContainer;
