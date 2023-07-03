import React, { useState } from "react";
import {
  Avatar,
  Button,
  Box,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { FacebookOutlined, Google, GitHub } from "@mui/icons-material";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const googleLogin = () => {
  alert("Hello");
};

const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  </Grid>
);

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container
      className="h-screen"
      component="main"
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        className="paper"
        elevation={6}
        sx={{
          backgroundColor:"#f5f5f5",
          boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        paddingTop:"1rem"
        }}
      >
        <Avatar style={{ backgroundColor: "#71C9CE", margin: "0.5rem 0rem" }}>
          <LockOutlinedIcon className="" />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="form"
          style={{ marginTop: "1rem" }}
        >
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#71C9CE", marginTop: "1rem" }}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Avatar sx={{ backgroundColor: "#71C9CE", m: 1 }}>
              <Google />
            </Avatar>
            <Avatar sx={{ backgroundColor: "#71C9CE", m: 1 }}>
              <FacebookOutlined />
            </Avatar>
            <Avatar sx={{ backgroundColor: "#71C9CE", m: 1 }}>
              <GitHub />
            </Avatar>
          </Box>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode} style={{ color: "#71C9CE" }}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
