import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Footer from '../Footer/Footer';
import { foodApi } from '../../utils/FoodApi';
import './App.css';

function App() {
  // Estado para armazenar dados do menu quando forem buscados da API
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Buscar algumas informações básicas da API ao inicializar
  useEffect(() => {
    // Podemos pré-carregar algumas informações aqui se necessário
    // Por enquanto, o carregamento é feito nos componentes específicos
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