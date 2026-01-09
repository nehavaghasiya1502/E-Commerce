import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SpaIcon from "@mui/icons-material/Spa";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ChairIcon from "@mui/icons-material/Chair";

const MotionBox = motion(Box);

const categories = [
    {
        title: "Beauty",
        icon: <SpaIcon sx={{ fontSize: 40 }} />,
        desc: "Premium beauty and personal care products to enhance your glow.",
        color: "linear-gradient(135deg,#f857a6,#ff5858)",
    },
    {
        title: "Clothing",
        icon: <CheckroomIcon sx={{ fontSize: 40 }} />,
        desc: "Trendy, modern and comfortable fashion for men, women and kids.",
        color: "linear-gradient(135deg,#43cea2,#185a9d)",
    },
    {
        title: "Grocery",
        icon: <ShoppingBasketIcon sx={{ fontSize: 40 }} />,
        desc: "Fresh groceries delivered quickly with quality assurance and prices.",
        color: "linear-gradient(135deg,#f7971e,#ffd200)",
    },
    {
        title: "Furniture",
        icon: <ChairIcon sx={{ fontSize: 40 }} />,
        desc: "Modern furniture designed to elevate your living space beautifully.",
        color: "linear-gradient(135deg,#667eea,#764ba2)",
    },
];

const About = () => {
    return (
        <Box sx={{ minHeight: "100vh", px: { xs: 2, md: 8 }, py: 8 }}>

            {/* HERO SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h3" align="center" fontWeight={700}>
                    About <span style={{ color: "#ff4d6d" }}>QuickBuy</span>
                </Typography>

                <Typography
                    align="center"
                    sx={{
                        mt: 1,
                        maxWidth: 700,
                        mx: "auto",
                        color: "text.secondary",
                    }}
                >
                    QuickBuy is a modern eCommerce platform bringing beauty, fashion,
                    groceries and furniture together in one seamless shopping experience.
                </Typography>
            </motion.div>

            {/* CATEGORY CARDS */}
            <Box sx={{ maxWidth: "1200px", mx: "auto", py: 8 }}>
                <Grid container spacing={4} justifyContent="center">
                    {categories.map((item, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <MotionBox
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                sx={{
                                    height: 220,
                                    p: 4,
                                    borderRadius: "32px",
                                    color: "#fff",
                                    background: item.color,
                                    boxShadow: "0 25px 45px rgba(0,0,0,0.18)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    transition: "0.4s",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                    },
                                }}
                            >
                                <Box sx={{ mb: 2 }}>{item.icon}</Box>

                                <Typography variant="h5" fontWeight={700}>
                                    {item.title}
                                </Typography>

                                <Typography sx={{ mt: 1, opacity: 0.9 }}>
                                    {item.desc}
                                </Typography>
                            </MotionBox>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* WHY CHOOSE US */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Box
                    sx={{
                        mt: 10,
                        px: { xs: 2, md: 6 },
                        py: 6,
                        borderRadius: "32px",
                        background: "linear-gradient(135deg,#fdfbfb,#ebedee)",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        align="center"
                        sx={{ mb: 5 }}
                    >
                        Why Choose <span style={{ color: "#ff4d6d" }}>QuickBuy?</span>
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                        {[
                            { text: "Fast Delivery", color: "#ff4d6d" },
                            { text: "Trusted Quality", color: "#43cea2" },
                            { text: "Secure Payments", color: "#667eea" },
                            { text: "24/7 Customer Support", color: "#f7971e" },
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <Box
                                        sx={{
                                            p: 2.5,
                                            textAlign: "center",
                                            borderRadius: "18px",
                                            fontWeight: 600,
                                            background: `linear-gradient(135deg, ${item.color}, #00000010)`,
                                            color: "#fff",
                                            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {item.text}
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </motion.div>


        </Box>
    );
};

export default About;

