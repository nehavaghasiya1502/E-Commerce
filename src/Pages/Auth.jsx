import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Tabs,
  Tab,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Email, Lock, Person, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0); // 0 = login, 1 = signup
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ---------------- REGISTER ----------------
  const handleRegister = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.some(u => u.email === form.email)) {
      alert("Email already registered. Please login.");
      setTab(0); // switch to login tab
      return;
    }

    const newUser = { name: form.name, email: form.email, password: form.password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("isLogin", "true");

    alert("Account created & logged in!");

    // Clear form after account creation
    setForm({
      name: "",
      email: "",
      password: ""
    });

    setTab(0); // switch to login tab
    navigate("/"); // redirect to home
  };

  // ---------------- LOGIN ----------------
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === form.email && u.password === form.password);

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("isLogin", "true");
    alert("Login successful!");
    navigate("/");
  };

  return (
    <Box
      sx={{
        flex: 1,
        background: "linear-gradient(90deg, #ae263cff, #6b1d2b, #291414ff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: 380,
          p: 4,
          borderRadius: 4,
          backdropFilter: "blur(10px)"
        }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
          {tab === 0 ? "Welcome Back" : "Create Account"}
        </Typography>

        <Tabs value={tab} onChange={(e, v) => setTab(v)} centered>
          <Tab label="Login" />
          <Tab label="Signup" />
        </Tabs>

        {/* Signup Name Field */}
        {tab === 1 && (
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            name="name"
            value={form.name}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              )
            }}
          />
        )}

        {/* Email Field */}
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          name="email"
          value={form.email}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            )
          }}
        />

        {/* Password Field */}
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          margin="normal"
          name="password"
          value={form.password}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Button
          fullWidth
          sx={{
            mt: 3,
            py: 1.3,
            borderRadius: 3,
            background: "linear-gradient(135deg, #ff4d6d, #000)"
          }}
          variant="contained"
          onClick={tab === 0 ? handleLogin : handleRegister}
        >
          {tab === 0 ? "Login" : "Create Account"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Auth;
