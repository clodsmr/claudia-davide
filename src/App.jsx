// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import ConfermaPage from './confermaPage';
import DettagliPage from './dettagliPage';
import ListanozzePage from './ListanozzePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rsvp" element={<ConfermaPage />} />
          <Route path="/dettagli" element={<DettagliPage />} />
          <Route path="/lista-nozze" element={<ListanozzePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
