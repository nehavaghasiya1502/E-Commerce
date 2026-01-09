import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://formspree.io/f/yourFormID", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            alert("Failed to send message. Try again.");
        }
    };

    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f5f5f5",
                padding: 4,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h3" align="center" fontWeight={700}>
                    Contact <span style={{ color: "#ff4d6d" }}>QuickBuy</span>
                </Typography>

                <Typography variant="h6" sx={{ mt: 4, mb: 4, textAlign: "center" }}>
                    Have any questions about Beauty, Clothing, Grocery or Furniture? Feel
                    free to contact us anytime.
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Paper
                    elevation={6}
                    sx={{
                        padding: 4,
                        borderRadius: 3,
                        maxWidth: 700,
                        width: "100%",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 2,
                                mb: 2,
                            }}
                        >
                            <TextField
                                label="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Box>
                        <TextField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                            required
                            sx={{ mb: 3 }}
                        />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: "#ff416c",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    px: 4,
                                    py: 1.5,
                                    "&:hover": { backgroundColor: "#ff1e50" },
                                }}
                            >
                                SEND MESSAGE &nbsp;➡
                            </Button>
                        </motion.div>
                    </form>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default Contact;
