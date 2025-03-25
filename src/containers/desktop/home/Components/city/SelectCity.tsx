"use client";
import useTranslation from "@app/src/app/Dictionaries/hooks/useTranslation";
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
  const { t } = useTranslation("common");
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
        Pilih Kota/Nama Hotel/Destinasi
      </Typography>
      <Select
        displayEmpty
        id="select-city"
        value={listCity.find((item) => item.id === city)?.name || ""}
        onChange={handleChange}
        sx={{ borderRadius: 18 }}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{t("placeholder-city")}</em>;
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
            <em>{t("empty-city")}</em>
          </MenuItem>
        )}
      </Select>
    </Box>
  );
};

export default SelectInput;
