import React, { useState, useEffect } from 'react';
import { foodApi } from '../../utils/FoodApi';
import Preloader from '../Preloader/Preloader';
import './SpecialOffers.css';

function SpecialOffers() {
  const [specialItems, setSpecialItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    
    foodApi.getPopularRecipes()
      .then((data) => {
        if (data && data.recipes) {
          // Pegando apenas 3 receitas para mostrar como destaques
          const specials = data.recipes.slice(0, 3).map(recipe => ({
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            price: ((Math.random() * 20) + 10).toFixed(2), // Preço fictício
            description: recipe.summary.replace(/<[^>]*>/g, '').substring(0, 100) + '...' // Removendo HTML tags
          }));
          setSpecialItems(specials);
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Não foi possível carregar os pratos especiais.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="special-offers">
      <h2 className="special-offers__title">Pratos Especiais</h2>
      
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p className="special-offers__error">{error}</p>
      ) : (
        <div className="special-offers__container">
          {specialItems.map((item) => (
            <div className="special-card" key={item.id}>
              <div 
                className="special-card__image" 
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="special-card__content">
                <h3 className="special-card__title">{item.title}</h3>
                <p className="special-card__description">{item.description}</p>
                <div className="special-card__footer">
                  <span className="special-card__price">${item.price}</span>
                  <button className="special-card__button">Pedir Agora</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SpecialOffers;