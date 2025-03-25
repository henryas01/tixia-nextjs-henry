"use client";
import useTranslation from "@app/src/app/Dictionaries/hooks/useTranslation";
import { HomeContext } from "@app/src/modules/home/contexts";
import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";

const DateComponent = () => {
  const { t } = useTranslation("common");
  const { setData } = useContext(HomeContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      date: event.target.value ?? "",
    });
  };
  return (
    <Box
      sx={{
        width: "max-content",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ color: "black", marginBottom: 1 }}>
        {t("date-stay")}
      </Typography>
      <TextField
        slotProps={{ input: { style: { borderRadius: 18 } } }}
        onChange={handleChange}
        placeholder={t("placeholder-date")}
        type="date"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default DateComponent;
