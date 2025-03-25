"use client";
import { HomeContext } from "@app/src/modules/home/contexts";
import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";

const DateComponent = () => {
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
        Tanggal Menginap
      </Typography>
      <TextField
        slotProps={{ input: { style: { borderRadius: 18 } } }}
        onChange={handleChange}
        placeholder="Pilih tanggal menginap"
        type="date"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default DateComponent;
