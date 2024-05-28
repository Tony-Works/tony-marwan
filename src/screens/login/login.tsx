import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
  InputAdornment,
} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navigate('/dashboard');
    try {
      const res = await axios.post(
        'http://apps.webhop.biz:2087/api/Serviceauth/authentication',

        { username: data.get('username'), password: data.get('password') },
      );
      navigate('/dashboard');
      console.log('::::::::::::', res, '::::::::::::');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'red' }}>
          <VpnKeyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Al Marwan Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
            input: {
              border: 0,
              fontSize: 15,
              fontWeight: 600,
            },
            '.MuiFormLabel-root': {
              fontSize: 15,
            },
            '.MuiFormHelperText-root': {
              fontSize: 11,
            },
          }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            // helperText={error ? 'Required Input.' : ''}
            label="Password"
            id="password"
            type={visible ? 'text' : 'password'}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setVisible(!visible)}>
                  {visible ? (
                    <VisibilityOffIcon sx={{ fontSize: 18 }} />
                  ) : (
                    <VisibilityIcon sx={{ fontSize: 18 }} />
                  )}
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            sx={{
              float: 'right',
              span: {
                fontSize: 16,
              },
            }}
            control={<Checkbox value="remember" size="small" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
        </Box>

        <Typography variant="body2" color="text.secondary" align="center">
          Al Marwan Group
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
