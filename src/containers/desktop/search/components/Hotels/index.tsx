"use client";

import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PoolIcon from "@mui/icons-material/Pool";
// import LocalParkingIcon from "@mui/icons-material/LocalParking";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
// import SpaIcon from "@mui/icons-material/Spa";
// import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import Image from "next/image";
import { SearchHotels } from "@app/src/modules/search/types/Hotels";

type HotelsProps = {
  data?: SearchHotels[];
};

export default function Hotels({ data }: HotelsProps) {
  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" fontWeight="bold">
        Hasil Pencarian
      </Typography>
      <Typography variant="body2" color="textSecondary">
        9999 Hotel Ditemukan
      </Typography>

      {data?.map((hotel, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            marginTop: 3,
          }}
        >
          {/* Hotel Image */}
          <Image
            src={hotel?.images?.[1] ?? ""}
            alt={hotel?.name ?? ""}
            width={180}
            height={140}
            style={{ objectFit: "cover", borderRadius: "16px 0 0 16px" }}
          />

          {/* Hotel Details */}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              {hotel.name}
            </Typography>

            {/* Stars */}
            <Box sx={{ display: "flex", gap: 0.5, my: 1 }}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#FFD700" }} />
                ))}
            </Box>

            {/* Location */}
            <Typography variant="body2" color="textSecondary">
              <LocationOnIcon
                fontSize="small"
                sx={{ verticalAlign: "middle", mr: 0.5 }}
              />
              {hotel.address}
            </Typography>

            {/* Amenities */}
            <Box sx={{ display: "flex", gap: 1, my: 1 }}>
              {hotel.facilities}
            </Box>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "20px" }}
              >
                Pilih Hotel
              </Button>
              <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                Bisa Refundable
              </Button>
            </Box>
          </CardContent>

          {/* IDR 999.999.999 /malam */}

          {/* Price */}
          <Box sx={{ display: "flex", alignItems: "center", px: 3 }}>
            <Typography variant="h6" fontWeight="bold" color="primary">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(hotel?.rooms?.[0]?.price ?? 0)}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
