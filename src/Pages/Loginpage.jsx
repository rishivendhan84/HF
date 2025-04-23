import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
  Slide,
  Fade,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Registering:', form);
    } else {
      console.log('Logging in:', form);
    }
  };

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
      <Grid item xs={11} sm={8} md={5}>
        <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight="bold">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Typography>
            </Grid>
          </Grid>

          <form onSubmit={handleSubmit}>
            <Fade in={isSignUp}>
              <div>
                {isSignUp && (
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    margin="normal"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            </Fade>

            <Slide direction="down" in timeout={400}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                margin="normal"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Slide>

            <Slide direction="up" in timeout={400}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                margin="normal"
                value={form.password}
                onChange={handleChange}
                required
              />
            </Slide>

            <Fade in={isSignUp}>
              <div>
                {isSignUp && (
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    margin="normal"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            </Fade>

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              {isSignUp ? 'Register' : 'Login'}
            </Button>

            <Typography align="center" sx={{ mt: 2 }}>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <Link component="button" underline="hover" onClick={toggleForm}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignIn;
