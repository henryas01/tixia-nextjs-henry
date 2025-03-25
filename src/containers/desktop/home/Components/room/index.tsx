"use client";
import { HomeContext } from "@app/src/modules/home/contexts";
import { Box, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";

const Room = () => {
  const { setData } = useContext(HomeContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      countOfVisitor: event.target.value ?? "",
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
        Jumlah Tamu dan Kamar
      </Typography>
      <TextField
        slotProps={{ input: { style: { borderRadius: 18 } } }}
        sx={{ borderRadius: 20 }}
        onChange={handleChange}
        placeholder="Masukkan jumlah tamu dan kamar"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default Room;
