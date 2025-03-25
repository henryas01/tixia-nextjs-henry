"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
const menuItems = ["My Booking", "Wishlist", "Blog", "Help"];

export default function Navbar() {
  return (
    <AppBar position="sticky" color="primary">
      <Container>
        <Toolbar>
          {/* Logo / Branding */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            STAYKUY
          </Typography>

          {/* Right Section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {menuItems.map((item, index) => (
              <Button key={index} color="inherit" sx={{ marginRight: 2 }}>
                {item}
              </Button>
            ))}

            {/* Avatar with Menu */}
            <IconButton>
              <Avatar alt="User Name" src="/avatar.jpg" />
            </IconButton>

            <Box sx={{ display: "flex", alignItems: "center", marginLeft: 5 }}>
              ID
            </Box>
            {/* <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
