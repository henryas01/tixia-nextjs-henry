"use client";
import useTranslation from "@app/src/app/Dictionaries/hooks/useTranslation";
import { Box, Button } from "@mui/material";
import React from "react";

const Submit = () => {
  const { t } = useTranslation("common");
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
        {t("find-hotel")}
      </Button>
    </Box>
  );
};

export default Submit;
