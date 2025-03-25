"use client";
import useTranslation from "@app/src/app/Dictionaries/hooks/useTranslation";
import { HomeContext } from "@app/src/modules/home/contexts";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Submit = () => {
  const { t } = useTranslation("common");
  const { city, date, countOfVisitor } = useContext(HomeContext);
  const { push } = useRouter();
  const findHotel = () => {
    push(`/search?city=${city}&date=${date}&countOfVisitor=${countOfVisitor}`);
  };

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
        onClick={() => findHotel()}
      >
        {t("find-hotel")}
      </Button>
    </Box>
  );
};

export default Submit;
