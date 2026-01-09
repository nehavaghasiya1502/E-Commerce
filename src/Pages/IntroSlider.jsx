import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import hero1 from "../Assets/hero1.png";
import hero2 from "../Assets/hero2.png"
import hero3 from "../Assets/hero3.png"
import hero4 from "../Assets/hero4.png"
import { useNavigate } from "react-router-dom";

const sliderImages = [
  {
    img: hero1,
    title: "Latest Beauty Collection",
    subtitle: "Discover trends that define you"
  },

  {
    img: hero2,
    title: "Men & Women Wear",
    subtitle: "Upgrade your wardrobe today"
  },
  {
    img: hero3,
    title: "Accessories & Gadgets",
    subtitle: "Style meets technology"
  },
  {
    img: hero4,
    title: "Fragrances",
    subtitle: "Perfumes & Colognes"
  }

];

const IntroSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer);
  }, []);


  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "60vh", md: "80vh" },
        width: "100%",
        overflow: "hidden"
      }}
    >
      {sliderImages.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === current ? 1 : 0,
            transition: "opacity 1s ease-in-out"
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)"
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              px: { xs: 3, md: 10 },
              color: "#fff"
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              {slide.title}
            </Typography>

            <Typography variant="h6" sx={{ my: 2 }}>
              {slide.subtitle}
            </Typography>

            {/* <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff3f6c",
                px: 4,
                py: 1,
                "&:hover": {
                  backgroundColor: "#e73362"
                }
              }}
            >
              Shop Now
            </Button> */}
            <Button
              variant="contained"
              onClick={() => navigate("/categories")}
              sx={{
                backgroundColor: "#ff3f6c",
                px: 4,
                py: 1.2,
                fontWeight: "bold",
                borderRadius: "10px",
                // boxShadow: "0 8px 20px rgba(255,63,108,0.4)",
                "&:hover": {
                  backgroundColor: "#e73362",
                  transform: "translateY(-3px)",
                  // boxShadow: "0 12px 25px rgba(255,63,108,0.6)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Shop Now
            </Button>

          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default IntroSlider;
