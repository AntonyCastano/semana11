import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Usuario from './components/Usuario';
import TablaMensualidades from './components/TablaMensualidades';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Usuario nombre="Lucía" apellido="Pérez" />
      <TablaMensualidades />
      <Footer />
    </div>
  );
}

export default App;
