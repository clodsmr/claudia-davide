import React from 'react';
import { Typography, Container, Card, Button } from '@mui/material';


const DettagliPage = () => (
  <Container disableGutters maxWidth={false}>
          <Card
            elevation={0}
            sx={{
              padding: 4,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',     
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
{/*               <Typography variant="regina">Castello Camemi</Typography> */}
            </section>
            <section
              className="text-center"
              style={{ marginTop: '2vh', display: 'flex', flexDirection: 'column' }}
            >
              <Typography variant="regina">
              Vi aspettiamo alle ore 17:00 presso Castello Camemi per celebrare insieme il nostro matrimonio. <br/>
                A seguire, il ricevimento avrà luogo nella stessa location. <br/>
                Al momento della conferma, vi chiediamo gentilmente di indicare la vostra preferenza tra i due menù proposti. <br/>
                La serata proseguirà con open bar e festa in piscina: non dimenticate il costume!
                </Typography>

            </section>

            <Button
                variant="contained"
                component="a"
                href="https://www.google.com/maps/place/Castello+Camemi/@37.2099632,14.7117769,17z/data=!4m20!1m10!3m9!1s0x1311723577d3aa2b:0xe39dd914027453de!2sCastello+Camemi!5m2!4m1!1i2!8m2!3d37.209959!4d14.7143572!16s%2Fg%2F11h15dmf2!3m8!1s0x1311723577d3aa2b:0xe39dd914027453de!5m2!4m1!1i2!8m2!3d37.209959!4d14.7143572!16s%2Fg%2F11h15dmf2?entry=ttu&g_ep=EgoyMDI1MDQxMy4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    backgroundColor: '#e2cebe',
                    borderRadius: '0px',
                    color: 'black',
                    width: '8rem',
                    alignSelf: 'center',
                    marginTop: '3vh',
                    boxShadow: 'none',
                    color: 'black'
                }}
                >
                MAPPA
             </Button>

          </Card>
  </Container>
);

export default DettagliPage;
