import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import City from "./city";
import Submit from "./submit";
import Date from "./date";
import Room from "./room";
// import { HomeContext } from "@app/src/modules/home/contexts";

const FormInput = () => {
  // const { city } = useContext(HomeContext);
  return (
    <Box
      sx={{
        width: "max-content",
        display: "flex",
        flexDirection: "row",
        gap: 6, // Spacing between elements
        backgroundColor: "white",
        padding: 3,
        borderRadius: 3,
        boxShadow: 3, // Adds slight elevation
        alignItems: "center",
      }}
    >
      {/* Input Fields */}
      <City />

      <Date />
      <Room />
      {/* Submit Button */}
      <Submit />
    </Box>
  );
};

export default FormInput;
