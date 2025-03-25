import { Box, Button, Typography, Divider } from "@mui/material";

export default function HeaderBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        background: "white",
        borderRadius: "50px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "16px 24px",
        width: "100%",
      }}
    >
      {/* Left Section */}
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        {/* City / Destination */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" color="textSecondary">
            Kota/Nama Hotel/ Destinasi
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            Jakarta
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        {/* Date */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" color="textSecondary">
            Tanggal Menginap
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            12 Mar - 14 Mar 2025
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        {/* Guests & Rooms */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" color="textSecondary">
            Jumlah Tamu dan Kamar
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            2 Tamu 2 Kamar
          </Typography>
        </Box>
      </Box>

      {/* Right Section: Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: "20px", paddingX: "20px", textTransform: "none" }}
      >
        Ubah Pencarian
      </Button>
    </Box>
  );
}
