import React from 'react';
import { Typography, Container, Card } from '@mui/material';

const ListaNozzePage = () => (
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
          maxWidth: '100%',
          minHeight: '59vh',
        }}
      >
        <Typography variant="h6" xs={{ marginBottom: '1vh' }}>
            LISTA NOZZE
        </Typography>
        <Typography variant="regina">Ci stiamo ancora pensando..</Typography>
      </Card>
  </Container>
);

export default ListaNozzePage;
