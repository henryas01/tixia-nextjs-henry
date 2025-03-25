"use client";
import { HomeContext } from "@app/src/modules/home/contexts";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";

type Props = {
  listCity: CityType[];
};

type CityType = {
  id: number;
  name: string;
  country: string;
};

const SelectInput = ({ listCity }: Props) => {
  const { city, setData } = useContext(HomeContext);

  const handleChange = (event: SelectChangeEvent) => {
    setData({
      city: event.target.value ?? 0,
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
        Pilih Kota/Nama Hotel/Destinasi {city}
      </Typography>
      <Select
        displayEmpty
        id="select-city"
        value={listCity.find((item) => item.id === city)?.name || ""}
        onChange={handleChange}
        sx={{ borderRadius: 18 }}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Pilih nama hotel/destinasi/kota menginap</em>;
          }

          return selected;
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        {listCity && listCity.length > 0 ? (
          listCity.map((city) => (
            <MenuItem key={city.id} value={city.id}>
              {city.name}, {city.country}
            </MenuItem>
          ))
        ) : (
          <MenuItem value="">
            <em>Data Kosong</em>
          </MenuItem>
        )}
      </Select>
    </Box>
  );
};

export default SelectInput;
