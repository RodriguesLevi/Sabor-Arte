import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Footer from '../Footer/Footer';

import './App.css';

function App() {
  // Buscar algumas informações básicas da API ao inicializar
  useEffect(() => {
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;