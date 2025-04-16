import React from 'react';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Box
} from '@mui/material';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import logoBeige from './assets/logo-beige.svg';
import logoGrande from './assets/logo-grande.svg';
import logoCastello from './assets/logo_bianco_267.svg';
import foglia from './assets/foglia.svg'


function HomePage() {
  return (
      <Container disableGutters maxWidth={false}>
        {/* Header */}

        {/* Background Hero */}
        <Card
          sx={{
            backgroundImage: `url('https://www.castellocamemi.com/img/gallery/full_6410ed46d7de4.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) brightness(0.9)',
            backgroundRepeat: 'no-repeat',
            height: '20rem',
            opacity: '0.7',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
        </Card>

        {/* Details & RSVP with vertical line */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white'
          }}
        >
          {/* Details Card */}
          <Card
            elevation={0}
            sx={{
              padding: 4,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              height: '26rem',
              width: '100%',
              border: 'none',
              boxSizing: 'border-box',
              maxWidth: '100%'
            }}
          >
            <img
              src="https://www.castellocamemi.com/img/loghi/logo_oro_267.png"
              style={{ height: '60px', alignSelf: 'center', marginBottom: '4vh' }}
              alt="Castello Logo"
            />
            <section className="text-center my-3">
              <Typography variant="h6" xs={{ marginBottom: '1vh' }}>
                CERIMONIA & RICEVIMENTO
              </Typography>
              <Typography variant="regina">Castello Camemi</Typography>
            </section>
            <section
              className="text-center"
              style={{ marginTop: '2vh', display: 'flex', flexDirection: 'column' }}
            >
              <Typography variant="body">ORE 17.00</Typography>
              <Typography variant="body">Contrada Camemi - Vizzini Scalo (CT)</Typography>
            </section>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#e2cebe',
                borderRadius: '0px',
                color: 'black',
                width: '8rem',
                alignSelf: 'center',
                marginTop: '3vh',
                boxShadow: 'none'
              }}
              component={Link} to="/dettagli"
            >
              DETTAGLI
            </Button>
          </Card>

          {/* Vertical Line */}
          <Box
            sx={{
              width: '1px',
              height: '6vh',
              backgroundColor: '#00000063',
              marginTop: '1vh',
              padding: '0px'
            }}
          />

          {/* RSVP Card */}
          <Card
            elevation={0}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              height: '25vh',
              width: '100%',
              border: 'none',
              backgroundColor: 'transparent',
        
            }}
          >
            {/* Decorative image on the right */}
            <Box
              component="img"
              src={foglia}
              alt="Decorative"
              sx={{
                position: 'absolute',
                right: '-16px',
                top: 0,
                height: '100%',
                width: 'auto',
                maxWidth: '50%',
                opacity: 0.3,
                objectFit: 'cover',
                zIndex: 0,
              }}
            />

            {/* Foreground content */}
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
              <section
                className="text-center"
                style={{ marginTop: '2vh', display: 'flex', flexDirection: 'column' }}
              >
                <Typography variant="h6" xs={{ marginBottom: '1vh' }}>
                  FACCI SAPERE SE CI SARAI
                </Typography>
                <Typography variant="regina">Compila il form</Typography>
              </section>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#e2cebe',
                  borderRadius: '0px',
                  color: 'black',
                  width: '8rem',
                  alignSelf: 'center',
                  marginTop: '3vh',
                  boxShadow: 'none'
                }}
                component={Link} to="/rsvp"
              >
                RSVP
              </Button>
            </CardContent>
          </Card>

        </Box>
        <Card
          sx={{
            position: 'relative',
            height: '20rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Background image with opacity */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url('https://www.castellocamemi.com/img/gallery/full_5a340405f3165.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'grayscale(100%) brightness(0.6)',
              opacity: 0.8,
              zIndex: 0,
            }}
          />

          {/* Foreground content (on top of background) */}
          <section id="details" className="text-center" style={{ zIndex: 1 }}>
            <img src={logoBeige} alt="Wedding Logo" style={{ height: '150px' }} />
          </section>
        </Card>
        <Card
            elevation={0}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              height: '15rem',
              width: '100%',
              border: 'none',
              backgroundColor: 'white',
              boxSizing: 'border-box',
              maxWidth: '100%'
            }}
          >
            {/* Decorative image on the right */}
            <Box
              component="img"
              src={foglia}
              alt="Decorative"
              sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '82%',
                width: 'auto',
                maxWidth: '45vw', 
                opacity: 0.3,
                objectFit: 'cover',
                zIndex: 0,
                transform: 'rotate(194deg)',
                pointerEvents: 'none',              
              }}
            />


            {/* Foreground content */}
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
              <section
                className="text-center"
                style={{ marginTop: '2vh', display: 'flex', flexDirection: 'column' }}
              >
                <Typography variant="h6" xs={{ marginBottom: '1vh' }}>
                  LISTA NOZZE
                </Typography>
                <Typography variant="regina">Abbiamo stilato una lista dei desideri, contribuisci pure liberamente!</Typography>
              </section>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#e2cebe',
                  borderRadius: '0px',
                  color: 'black',
                  width: '8rem',
                  alignSelf: 'center',
                  marginTop: '3vh',
                  boxShadow: 'none'
                }}
                component={Link} to="/lista-nozze"
              >
                SCOPRI
              </Button>
            </CardContent>
          </Card>

      </Container>
  );
}

export default HomePage;
