// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import ConfermaPage from './ConfermaPgae';
import DettagliPage from './DetailsPage';
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
