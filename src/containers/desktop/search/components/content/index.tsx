import { Box } from "@mui/material";
import Filters from "../filters";
import Hotels from "../Hotels";
import { SearchHotels } from "@app/src/modules/search/types/Hotels";

type HotelSearchResultsProps = {
  data?: SearchHotels[];
};

export default function HotelSearchResults({ data }: HotelSearchResultsProps) {
  return (
    <Box sx={{ display: "flex", gap: 4, padding: 4 }}>
      {/* Left Sidebar (Filters) */}
      <Filters />
      {/* Right Section (Hotel Listings) */}
      <Hotels data={data} />
    </Box>
  );
}
