import React, { useState } from 'react';
import {
  Typography,
  Container,
  Card,
  Button,
  Box,
  CardContent,
  TextField,
  MenuItem,
} from '@mui/material';

const ConfermaPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    presenza: '',
    menu: '',
    allergie: '',
    dal: '',
    al: '',
    bambini: '',
    numeroBambini: '',
  });

  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const presenza = formData.presenza === 'sì' ? 1 : 0
  
    const form = new FormData();
    form.append('nome', formData.nome);
    form.append('cognome', formData.cognome);
    form.append('presenza', presenza);
    form.append('menu', formData.menu);
    form.append('allergie', formData.allergie);
    form.append('dal', formData.dal);
    form.append('al', formData.al);
    form.append('bambini', formData.bambini);
    form.append('numeroBambini', formData.numeroBambini);
   
    fetch('https://script.google.com/macros/s/AKfycbyyZJ6qbiYzWyyPqO5Lga8CcCmQzltvJGW3I1S-aHVb1Ne0kVH0bA0pcGCEwbDvX0a7Bg/exec', {
      method: 'POST',
      body: form,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Form submitted:', data);
        setSuccess(true)
      })
      .catch((error) => {
        console.error('Error:', error);
        setSuccess(false)
      });
  };
  

  const isFormValid = formData.nome && formData.cognome && formData.presenza && formData.menu;

  return (
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
        <section
          className="text-center"
          style={{
            marginBottom: '2vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6">RSVP</Typography>
          <Typography variant="regina">Confermaci la tua presenza</Typography>
        </section>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}
        >
          <TextField
            name="nome"
            label="Nome"
            variant="outlined"
            required
            value={formData.nome}
            onChange={handleChange}
          />
          <TextField
            name="cognome"
            label="Cognome"
            variant="outlined"
            required
            value={formData.cognome}
            onChange={handleChange}
          />
          <TextField
            select
            name="presenza"
            label="Confermi la tua presenza?"
            required
            value={formData.presenza}
            onChange={handleChange}
          >
            <MenuItem value="sì">Sì</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </TextField>

          {formData.presenza === 'sì' && (
            <>
              <TextField
                select
                name="menu"
                label="Preferenza Menù"
                required
                value={formData.menu}
                onChange={handleChange}
              >
                <MenuItem value="carne">Carne</MenuItem>
                <MenuItem value="pesce">Pesce</MenuItem>
                <MenuItem value="vegetariano">Vegetariano</MenuItem>
                <MenuItem value="vegano">Vegano</MenuItem>
              </TextField>
              <TextField
                name="allergie"
                label="Allergie / Intolleranze"
                variant="outlined"
                value={formData.allergie}
                onChange={handleChange}
              />
              <TextField
                name="dal"
                label="Soggiorno: dal"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.dal}
                onChange={handleChange}
              />
              <TextField
                name="al"
                label="Soggiorno: al"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.al}
                onChange={handleChange}
              />

              {/* Bambini field */}
              <TextField
                select
                name="bambini"
                label="Ci sono bambini 3-10 anni?"
                value={formData.bambini}
                onChange={handleChange}
              >
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="si">Sì</MenuItem>
              </TextField>

              {formData.bambini === 'si' && (
                <TextField
                  name="numeroBambini"
                  label="Quanti bambini?"
                  type="number"
                  value={formData.numeroBambini}
                  onChange={handleChange}
                />
              )}
            </>
          )}

          <Typography variant="body2" sx={{ textAlign: 'justify' }}>
            N.B. La scelta del menù riguarda solo la cena servita al tavolo: durante il buffet degli antipasti potrai gustare un’ampia varietà di piatti, indipendentemente dalla tua scelta. <br />
          </Typography>

{   success ? 
          <Button
         
          variant="contained"
          sx={{
            backgroundColor: 'white',
            borderRadius: '0px',
            color: '#e2cebe',
            border: '2px solid #e2cebe',
            width: '8rem',
            alignSelf: 'center',
            marginTop: '3vh',
            boxShadow: 'none',
            fontWeight: '700'
          }}
          
        >
          INVIATO
        </Button>
            :
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#e2cebe',
              borderRadius: '0px',
              color: 'black',
              width: '8rem',
              alignSelf: 'center',
              marginTop: '3vh',
              boxShadow: 'none',
            }}
            disabled={!isFormValid}
          >
            INVIA
          </Button>}
        </form>
      </Card>
    </Container>
  );
};

export default ConfermaPage;
