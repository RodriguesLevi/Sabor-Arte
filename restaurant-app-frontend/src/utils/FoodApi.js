import { API_KEY } from './constants';

class FoodApi {
  constructor(apiKey) {
    this._apiKey = apiKey;
    // Usando o proxy local em vez da URL direta
    this._baseUrl = '/api/spoonacular';
  }

  // Método que verifica a resposta da requisição
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Erro: ${res.status}`);
  }

  // Método para buscar receitas populares
  getPopularRecipes() {
    return fetch(`${this._baseUrl}/recipes/random?apiKey=${this._apiKey}&number=10`)
      .then(this._checkResponse);
  }

  // Método para buscar categorias de menu
  getMenuCategories() {
    return fetch(`${this._baseUrl}/food/menuItems/categories?apiKey=${this._apiKey}`)
      .then(this._checkResponse);
  }

  // Método para buscar itens do menu
  getMenuItems(query = '') {
    const endpoint = query 
      ? `${this._baseUrl}/food/menuItems/search?query=${query}&apiKey=${this._apiKey}` 
      : `${this._baseUrl}/food/menuItems?apiKey=${this._apiKey}&number=20`;
    
    return fetch(endpoint)
      .then(this._checkResponse);
  }
}

// Criando e exportando uma instância da API
export const foodApi = new FoodApi(API_KEY);