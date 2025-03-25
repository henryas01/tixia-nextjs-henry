import { Box, Button } from "@mui/material";
import React from "react";

const Submit = () => {
  return (
    <Box
      sx={{
        width: "max-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: 18 }}
        size="large"
      >
        Cari Hotel
      </Button>
    </Box>
  );
};

export default Submit;
