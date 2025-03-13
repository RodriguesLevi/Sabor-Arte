# Restaurant App - Projeto Final

## Descrição
Este é um aplicativo front-end para um restaurante, desenvolvido como parte do projeto final do curso TripleTen. O aplicativo exibe informações sobre o restaurante, seu menu e ofertas especiais, usando uma API de terceiros para obter dados de alimentos.

## Tecnologias Utilizadas
- React
- React Router
- CSS (BEM)
- Vite
- Spoonacular API

## Funcionalidades
- Navegação entre páginas (Início, Menu, Sobre)
- Visualização dos itens do menu
- Pesquisa de itens do menu
- Carregamento progressivo dos itens (botão "Mostrar mais")
- Exibição de pratos especiais
- Layout responsivo para diferentes dispositivos

## Como executar o projeto localmente
1. Clone este repositório
2. Instale as dependências com `npm install`
3. Crie uma conta na [Spoonacular API](https://spoonacular.com/food-api) para obter uma API Key
4. Crie um arquivo `.env` na raiz do projeto e adicione sua API Key:
5. Execute o projeto com `npm run dev`
6. Acesse o projeto no navegador: `http://localhost:5173`

## Estrutura do Projeto
- `/src/components` - Componentes React
- `/src/utils` - Utilitários e API
- `/src/images` - Imagens do projeto
- `/src/vendor` - Recursos de terceiros (fontes)

## API
O projeto utiliza a [Spoonacular API](https://spoonacular.com/food-api) para obter dados de alimentos, receitas e informações de menu.

## Deploy
O projeto está disponível online em: [URL_DO_DEPLOY]

## Autor
Alisson Rodrigues

## Instruções para Execução
Para colocar este projeto em funcionamento:

### 1.Configure o projeto Vite:
npm create vite@latest restaurant-app-frontend -- --template react
cd restaurant-app-frontend

### 2.Instale as dependências:

npm install react-router-dom

### 3.Crie a estrutura de diretórios conforme descrito acima.
### 4.Obtenha uma API Key da Spoonacular API.
### 5.Substitua a chave API no arquivo utils/constants.js com sua própria chave.
### 6.Execute o projeto:


bashCopynpm run dev


## Próximos Passos
Este é um projeto base que atende aos requisitos do projeto final. Você pode melhorá-lo adicionando:

#### 1.Funcionalidade de modal para detalhes dos pratos
#### 2.Sistema de reservas
#### 4.Seção de testemunhos de clientes
#### 5.Galeria de fotos do restaurante
#### 6.Mapa com a localização