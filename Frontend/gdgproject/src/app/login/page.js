"use client"; 

import React, { useState } from 'react';
import { TextField, Button, Link, Card, CardContent, Typography, Dialog, Box } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const validEmailDomain = '@iitk.ac.in';

  const handleLogin = () => {
    if (email.endsWith(validEmailDomain)) {
      console.log('Logged in with:', email);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleForgotPassword = () => {
    console.log('Reset password for:', forgotPasswordEmail);
    setForgotPasswordOpen(false);
  };

  return (
    <Box
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'row',
        overflow: 'hidden',
      }}
    >
      {}
      <Box
        style={{
          flex: 1,
          backgroundImage: 'url("/images/BG-new-1.jpg")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {}
      <Box
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Card style={{ maxWidth: 400, padding: 20 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom align="center">
              Login
            </Typography>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={isError}
              helperText={isError ? `Please use a valid ${validEmailDomain} email` : ''}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 20 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Link
              href="#"
              style={{ marginTop: 16, display: 'block', textAlign: 'center' }}
              onClick={() => setForgotPasswordOpen(true)}
            >
              Forgot Password?
            </Link>
          </CardContent>

          {}
          <Dialog open={forgotPasswordOpen} onClose={() => setForgotPasswordOpen(false)}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Forgot Password
              </Typography>
              <TextField
                label="Enter your email"
                type="email"
                fullWidth
                margin="normal"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: 20 }}
                onClick={handleForgotPassword}
              >
                Reset Password
              </Button>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                style={{ marginTop: 10 }}
                onClick={() => setForgotPasswordOpen(false)}
              >
                Cancel
              </Button>
            </CardContent>
          </Dialog>
        </Card>
      </Box>
    </Box>
  );
};

export default LoginPage;
