import frangoParmegiana from '../../src/images/Parmegiana.jpg';
import Risoto from '../../src/images/risoto.webp';
import FileMignon from '../../src/images/bife-ao-molho-madeira.jpg';
import Salmão from '../../src/images/SALMAO-GRELHADO.webp';
import Massa from '../../src/images/Massa-ao-Molho-Pesto.jpg';
import tiramisu from '../../src/images/tiramisu.jpg';

export const mockMenuItems = [
    {
      id: 1,
      title: "Frango à Parmegiana",
      image: frangoParmegiana,
      restaurantChain: "Delicious Bistro",
      price: 24.90,
      description: "Peito de frango empanado coberto com molho de tomate e queijo derretido. Acompanha arroz e batatas fritas."
    },
    {
      id: 2,
      title: "Risoto de Cogumelos",
      image: Risoto,
      restaurantChain: "Delicious Bistro",
      price: 32.50,
      description: "Arroz arbóreo cozido lentamente com mix de cogumelos frescos, vinho branco, manteiga e parmesão."
    },
    {
      id: 3,
      title: "Filé Mignon ao Molho Madeira",
      image: FileMignon,
      restaurantChain: "Delicious Bistro",
      price: 45.90,
      description: "Medalhões de filé mignon grelhados, cobertos com molho madeira. Acompanha purê de batatas e legumes salteados."
    },
    {
      id: 4,
      title: "Salmão Grelhado",
      image: Salmão,
      restaurantChain: "Delicious Bistro",
      price: 38.90,
      description: "Filé de salmão grelhado com ervas, servido com arroz de limão e legumes no vapor."
    },
    {
      id: 5,
      title: "Massa ao Molho Pesto",
      image: Massa,
      restaurantChain: "Delicious Bistro",
      price: 29.90,
      description: "Espaguete al dente ao molho pesto fresco, tomates cereja e lascas de parmesão."
    },
    {
      id: 6,
      title: "Tiramisu",
      image: tiramisu,
      restaurantChain: "Delicious Bistro",
      price: 18.90,
      description: "Sobremesa italiana tradicional com camadas de biscoito champagne, café, creme de mascarpone e cacau."
    }
  ];
  
  export const mockSpecialOffers = [
    {
      id: 101,
      title: "Festival de Frutos do Mar",
      image: "https://via.placeholder.com/400x300?text=Frutos+do+Mar",
      price: 59.90,
      description: "Uma seleção de frutos do mar frescos incluindo camarões, lulas, mexilhões e peixe do dia, preparados em molho especial da casa."
    },
    {
      id: 102,
      title: "Trio de Risotos",
      image: "https://via.placeholder.com/400x300?text=Trio+Risotos",
      price: 47.90,
      description: "Degustação de três tipos de risoto: funghi, limão siciliano e ragu de costela. Perfeito para compartilhar."
    },
    {
      id: 103,
      title: "Carré de Cordeiro",
      image: "https://via.placeholder.com/400x300?text=Carre+Cordeiro",
      price: 68.90,
      description: "Carré de cordeiro grelhado com crosta de ervas, servido com batatas confitadas e molho de hortelã."
    }
  ];