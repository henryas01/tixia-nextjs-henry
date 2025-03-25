import {
  Box,
  Typography,
  Divider,
  Checkbox,
  FormControlLabel,
  Slider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function Filters() {
  return (
    <Box
      sx={{
        width: "280px",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: 3,
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Filter Pencarian
      </Typography>

      {/* Star Rating Filter */}
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Bintang Hotel
      </Typography>
      {[1, 2, 3, 4, 5].map((stars) => (
        <FormControlLabel
          sx={{ display: "flex" }}
          key={stars}
          control={<Checkbox />}
          label={
            <Box
              sx={{
                display: "flex",
                gap: 0.5,
                width: "max-content",
              }}
            >
              {Array(stars)
                .fill(0)
                .map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#FFD700" }} />
                ))}
            </Box>
          }
        />
      ))}

      <Divider sx={{ my: 2 }} />

      {/* Facilities */}
      <Typography variant="body1">Fasilitas</Typography>
      {[
        "Kolam Renang",
        "Parkir Gratis",
        "Pusat Kebugaran",
        "SPA",
        "Mesin Cuci",
      ].map((facility) => (
        <FormControlLabel
          key={facility}
          control={<Checkbox />}
          label={facility}
        />
      ))}

      <Typography
        variant="body2"
        color="primary"
        sx={{ mt: 1, cursor: "pointer" }}
      >
        + Tampilkan lebih banyak
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Price Range */}
      <Typography variant="body1">Harga</Typography>
      <Slider min={0} max={999999999} defaultValue={500000000} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>IDR 0</Typography>
        <Typography>IDR 999.999.999</Typography>
      </Box>
    </Box>
  );
}
