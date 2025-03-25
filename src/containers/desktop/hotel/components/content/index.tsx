"use client";

import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Card,
  CardMedia,
} from "@mui/material";
import { useState } from "react";

const egImage = [
  "https://ota-gin.onrender.com/static/hotels/kempinsky/image-1.jpg",
  "https://ota-gin.onrender.com/static/hotels/kempinsky/image-2.jpg",
  "https://ota-gin.onrender.com/static/hotels/kempinsky/image-3.jpg",
  "https://ota-gin.onrender.com/static/hotels/kempinsky/image-4.jpg",
];

export default function HotelDetail() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", padding: 2 }}>
      {/* Hotel Header */}
      <Typography variant="h4" fontWeight="bold">
        Hilton Garden Inn
      </Typography>

      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <Typography variant="body1">⭐⭐⭐⭐⭐</Typography>
        <Typography variant="body2" color="gray">
          📍 Jl. Taman Palem Lestari No.1 Blok B13, Cengkareng, Jakarta 11730
        </Typography>
      </Box>

      {/* Hotel Image Section */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
            <CardMedia
              component="img"
              src="https://ota-gin.onrender.com/static/hotels/kempinsky/image-1.jpg"
              height="350"
              alt="Main Hotel"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            {egImage.map((i) => (
              <Grid item xs={6} key={i}>
                <Card sx={{ borderRadius: 2 }}>
                  <CardMedia
                    component="img"
                    src={i}
                    height="80"
                    alt={`Thumbnail ${i}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{ mt: 2, borderBottom: 1, borderColor: "divider" }}
      >
        <Tab label="Tentang Hotel" />
        <Tab label="Fasilitas" />
        <Tab label="Kamar" />
        <Tab label="Review" />
        <Tab label="Lokasi" />
        <Tab label="Kebijakan Hotel" />
      </Tabs>

      {/* Hotel Description */}
      <Box mt={3}>
        <Typography variant="h6" fontWeight="bold">
          Tentang Hotel
        </Typography>
        <Typography variant="body1" mt={1} color="text.secondary">
          Berlokasi di Cengkareng, Jakarta Barat, Hilton Garden Inn Jakarta
          Taman Palem merupakan hotel bintang 5 yang menawarkan penginapan yang
          nyaman dilengkapi dengan layanan resepsionis 24 jam dan fasilitas
          rapat.
        </Typography>
        <Typography variant="body1" mt={1} color="text.secondary">
          Kamar ber-AC dengan desain modern dan menenangkan yang ditawarkan
          dilengkapi dengan TV layar datar, meja kerja, dan kasur yang nyaman.
        </Typography>
      </Box>
    </Box>
  );
}
