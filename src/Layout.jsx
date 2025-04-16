// src/Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Button, Typography, Card, CardContent, Box } from '@mui/material';
import logo from './assets/logo.svg';
import logoGrande from './assets/logo-grande.svg';

const Layout = () => {
  return (
    <Container disableGutters maxWidth={false}>
      {/* Header */}
      <header className="text-center header-section">
        <AppBar position="sticky" sx={{ backgroundColor: '#e2cebe', color: '#000', top: '0px' }} elevation={0}>
          <Toolbar sx={{ position: 'relative', justifyContent: 'space-between' }}>
            {/* Left button */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit" component={Link} to="/rsvp">RSVP</Button>
            </Box>

            {/* Centered logo */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Button color="inherit" component={Link} to="/">
              <img src={logo} alt="Wedding Logo" style={{ height: '40px' }} />
              </Button>
              
            </Box>

            {/* Right button */}
            <Box>
              <Button color="inherit" component={Link} to="/lista-nozze">Lista Nozze</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </header>

      {/* Optional Logo Section */}
      <Card sx={{ my: 4, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center' }} elevation={0}>
        <CardContent>
          <section id="details" className="text-center">
            <img src={logoGrande} alt="Wedding Logo" style={{ height: '150px' }} />
          </section>
        </CardContent>
      </Card>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center', paddingTop: '2vh' }}>
        <img src={logo} alt="Wedding Logo" style={{ height: '40px' }} />
      </Typography>
    </Container>
  );
};

export default Layout;
