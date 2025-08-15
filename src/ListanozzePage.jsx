import React from 'react';
import { Typography, Container, Card, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mate from './assets/yerba-mate-00.jpg'
import calafate from './assets/el_calafate_argentina_13.webp'
import cerro from './assets/145.jpg'
import patagonia from './assets/variant.jpg'

const ListaNozzePage = () => {
  const images = [
    mate, calafate, cerro, patagonia
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <Container disableGutters>
      <Card
        elevation={0}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100vw',
          border: 'none',
          boxSizing: 'border-box',
          maxWidth: '100vw',
          minHeight: '59vh',
          background: '#fafafa',
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
          Lista Nozze
        </Typography>

        <Box sx={{ width: '100%', maxWidth: 600, marginBottom: 4 }}>
          <Slider {...settings}>
            {images.map((src, index) => (
              <Box key={index}>
                <img
                  src={src}
                  alt={`Argentina ${index + 1}`}
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    maxHeight: '400px',
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        <Typography variant="regina" sx={{ maxWidth: 700, marginBottom: 3 }}>
          La vostra presenza sarà per noi il dono più prezioso.
          Se desiderate comunque farci un regalo, un qualsiasi contributo al nostro 
          viaggio di nozze in Argentina sarà molto gradito.
        </Typography>

        <Box sx={{ backgroundColor: '#fff', padding: 2, borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            IBAN:
          </Typography>
          <Typography variant="regina" sx={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
            IT06 Y035 7601 6010 1000 5281 498
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};

export default ListaNozzePage;
