import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Send,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  const footerCategories = [
    { name: "Beauty", path: "/categories/beauty" },
    { name: "Clothes", path: "/categories/clothes" },
    { name: "Electronics", path: "/categories/electronics" },
    { name: "Fragrances", path: "/categories/fragrances" },
  ];


  const linkStyle = {
    color: "#bbb",
    mb: 1,
    cursor: "pointer",
    transition: "0.3s ease",
    "&:hover": {
      color: "#ff4d6d",
      transform: "translateX(6px)",
    },
  };


  return (
    <Box
      sx={{
        bgcolor: "#111",
        color: "#fff",
        mt: 0,
        pt: { xs: 6, md: 8 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        px={{ xs: 2, sm: 4, md: 10 }}
      >


        {/* Brand */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h4" fontWeight={700}>
            Quick<span style={{ color: "#ff4d6d" }}>Buy</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: "#bbb",
              lineHeight: 1.8,
              px: { xs: 2, md: 0 },
            }}
          >

            Your  destination for fashion, beauty, electronics and fragrances.
            Shop smarter, live better with QuickBuy.
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "flex",
              gap: 1.5,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >

            {[Facebook, Instagram, Twitter, LinkedIn].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  bgcolor: "#1c1c1c",
                  color: "#fff",
                  "&:hover": { bgcolor: "#ff4d6d" },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Grid>

        {/* Categories */}
        <Grid
          item
          xs={6}
          md={2}
          sx={{
          textAlign: "start",
            mt: { xs: 3, md: 0 },
          }}
        >
          <Typography fontWeight={700} mb={2}>
            Categories
          </Typography>

          {["Beauty", "Clothes", "Electronics", "Fragrances"].map((item) => (
            <Typography
              key={item}
              onClick={() => navigate(`/products/${item}`)}   // ✅ DIRECT CONNECT
              sx={{
                color: "#bbb",
                mb: 1,
                cursor: "pointer",
                transition: "0.3s ease",
                "&:hover": {
                  color: "#ff4d6d",
                  transform: "translateX(6px)",
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Quick Links */}
        <Grid
          item
          xs={6}
          md={2}
          sx={{
            textAlign: "start",
            mt: { xs: 3, md: 0 },
          }}
        >
          <Typography fontWeight={700} mb={2}>
            Quick Links
          </Typography>

          <Typography sx={linkStyle} onClick={() => navigate("/")}>
            Home
          </Typography>

          <Typography sx={linkStyle} onClick={() => navigate("/categories")}>
            Category
          </Typography>

          <Typography sx={linkStyle} onClick={() => navigate("/about")}>
            About
          </Typography>

          <Typography sx={linkStyle} onClick={() => navigate("/contact")}>
            Contact
          </Typography>
        </Grid>


        {/* Newsletter */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography align="center" fontWeight={700} mb={2}>
            Join Our Newsletter
          </Typography>
          <Typography align="center" variant="body2" color="#bbb" mb={2}>
            Get updates about new products and special offers.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >

            <TextField
              placeholder="Enter your email"
              fullWidth
              variant="outlined"
              size="small"
              sx={{
                bgcolor: "#1c1c1c",
                borderRadius: 1,
                input: { color: "#fff" },
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#ff4d6d",
                "&:hover": { bgcolor: "#e63b5c" },
              }}
            >
              <Send />
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5, borderColor: "#6b6b6bff" }} />

      {/* Bottom */}
      <Typography
        align="center"
        variant="body2"
        sx={{ pb: 3, color: "#888" }}
      >
        © {new Date().getFullYear()} QuickBuy. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
