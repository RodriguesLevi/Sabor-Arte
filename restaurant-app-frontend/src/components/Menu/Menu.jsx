import React, { useState, useEffect } from 'react';
import MenuList from '../MenuList/MenuList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { mockMenuItems } from '../../utils/mockData';
import { ITEMS_PER_PAGE, ERROR_MESSAGES } from '../../utils/constants';
import './Menu.css';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [setSearchQuery] = useState('');
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [noResults, setNoResults] = useState(false);

  // Buscar itens do menu ao montar o componente (usando dados mock)
  useEffect(() => {
    setIsLoading(true);
    
    // Simulando uma chamada de API
    setTimeout(() => {
      setMenuItems(mockMenuItems);
      setFilteredItems(mockMenuItems);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Função para lidar com a pesquisa
  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsLoading(true);
    setErrorMessage('');
    setVisibleItems(ITEMS_PER_PAGE);
    
    // Simulando uma pesquisa
    setTimeout(() => {
      if (!query) {
        setFilteredItems(menuItems);
        setNoResults(false);
      } else {
        const results = menuItems.filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        
        setFilteredItems(results);
        setNoResults(results.length === 0);
      }
      setIsLoading(false);
    }, 500);
  };

  // Função para carregar mais itens
  const handleShowMore = () => {
    setVisibleItems(visibleItems + ITEMS_PER_PAGE);
  };

  return (
    <section className="menu">
      <h2 className="menu__title">Nosso Menu</h2>
      <SearchForm onSearch={handleSearch} />
      
      {isLoading ? (
        <Preloader />
      ) : errorMessage ? (
        <p className="menu__error">{errorMessage}</p>
      ) : noResults ? (
        <p className="menu__no-results">Nada encontrado. Tente outra pesquisa.</p>
      ) : (
        <>
          <MenuList items={filteredItems.slice(0, visibleItems)} />
          
          {visibleItems < filteredItems.length && (
            <button 
              className="menu__show-more" 
              onClick={handleShowMore}
            >
              Mostrar Mais
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default Menu;