import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo/logo1.png";
import { SearchContext } from "../Context/SearchContext";

const Header = () => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isLogin = localStorage.getItem("isLogin");

  // Responsive breakpoint
  const isMobile = useMediaQuery("(max-width:768px)");

  // Styles
  const navStyle = {
    fontWeight: 600,
    color: "#fff",
    position: "relative",
    backgroundColor: "transparent",
    px: 1.5,
    borderRadius: "6px",
    transition: "all 0.3s ease",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "2px",
      left: 0,
      bottom: 0,
      backgroundColor: "#ff4d6d",
      transition: "width 0.3s ease",
    },
    "&:hover": { color: "#ff4d6d" },
    "&:hover::after": { width: "100%" },
  };

  const iconStyle = {
    color: "#fff",
    transition: "all 0.3s ease",
    borderRadius: "50%",
    "&:hover": {
      color: "#ff4d6d",
      boxShadow: "0 0 10px rgba(255,77,109,0.6)",
    },
  };

  // Wishlist & Cart badges
  useEffect(() => {
    const updateWishlist = () => {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistCount(storedWishlist.length);
    };
    updateWishlist();
    window.addEventListener("storage", updateWishlist);
    return () => window.removeEventListener("storage", updateWishlist);
  }, []);

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(storedCart.length);
    };
    updateCart();
    window.addEventListener("storage", updateCart);
    return () => window.removeEventListener("storage", updateCart);
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#000", color: "#fff", height: 70 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            <img src={logo} alt="QuickBuy Logo" style={{ height: 120, width: 200, filter: "invert(1)" }} />
          </Box>

          {/* Search Box */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                borderRadius: 3,
                bgcolor: "#1c1c1c",
                width: 300,
                height: 40,
                color: "#fff",
              }}
            >
              <SearchIcon />
              <input
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search products..."
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  marginLeft: 8,
                  width: "100%",
                  color: "white",
                }}
              />
            </Box>
          )}

          {/* Navigation */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 3 }}>
              <Button sx={navStyle} onClick={() => navigate("/")}>HOME</Button>
              <Button sx={navStyle} onClick={() => navigate("/categories")}>CATEGORY</Button>
              <Button sx={navStyle} onClick={() => navigate("/about")}>ABOUT</Button>
              <Button sx={navStyle} onClick={() => navigate("/contact")}>CONTACT</Button>
            </Box>
          ) : (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Right Icons (Desktop) */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton sx={iconStyle} onClick={() => navigate("/wishlist")}>
                <Badge badgeContent={wishlistCount} color="error" showZero>
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>

              <IconButton sx={iconStyle} onClick={() => navigate("/cart")}>
                <Badge badgeContent={cartCount} color="error" showZero>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              <IconButton
                sx={iconStyle}
                onClick={() => {
                  if (isLogin) {
                    localStorage.removeItem("isLogin");
                    navigate("/");
                  } else {
                    navigate("/auth");
                  }
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>

        {/* Drawer for mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 250, p: 2 }}>
            <List>
              <ListItem button onClick={() => { navigate("/"); setDrawerOpen(false); }}>
                <ListItemText primary="HOME" />
              </ListItem>
              <ListItem button onClick={() => { navigate("/categories"); setDrawerOpen(false); }}>
                <ListItemText primary="CATEGORY" />
              </ListItem>
              <ListItem button onClick={() => { navigate("/about"); setDrawerOpen(false); }}>
                <ListItemText primary="ABOUT" />
              </ListItem>
              <ListItem button onClick={() => { navigate("/contact"); setDrawerOpen(false); }}>
                <ListItemText primary="CONTACT" />
              </ListItem>
            </List>
            <Divider />

            {/* Drawer Right Icons */}
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton sx={{ ...iconStyle, color: "#000" }} onClick={() => { navigate("/wishlist"); setDrawerOpen(false); }}>
                <Badge badgeContent={wishlistCount} color="error" showZero>
                  <FavoriteBorderIcon sx={{ color: "#000" }} />
                </Badge>
              </IconButton>

              <IconButton sx={{ ...iconStyle, color: "#000" }} onClick={() => { navigate("/cart"); setDrawerOpen(false); }}>
                <Badge badgeContent={cartCount} color="error" showZero>
                  <ShoppingCartIcon sx={{ color: "#000" }} />
                </Badge>
              </IconButton>

              <IconButton
                sx={{ ...iconStyle, color: "#000" }}
                onClick={() => {
                  if (isLogin) {
                    localStorage.removeItem("isLogin");
                    navigate("/");
                  } else {
                    navigate("/auth");
                  }
                  setDrawerOpen(false);
                }}
              >
                <AccountCircleIcon sx={{ color: "#000" }} />
              </IconButton>
            </Box>
          </Box>
        </Drawer>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
