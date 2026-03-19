/**
 * products.js
 * ----------------------------------------
 * Arquivo responsável por simular uma API de produtos.
 *
 * Ele contém:
 * - Uma lista de produtos mockados
 * - Uma função assíncrona que simula uma requisição (getProducts)
 *
 * Isso permite testar lógica de consumo de API sem precisar de um backend real.
 */

/**
 * products:
 * ---------
 * Array contendo os produtos da aplicação.
 *
 * Propriedades de cada produto:
 * - id        -> identificador único
 * - name      -> nome do produto
 * - price     -> preço do produto
 * - img       -> representação visual (emoji)
 * - featured  -> indica se o produto deve aparecer na seção principal
 * - offer     -> indica se o produto está em oferta
 */
export const products = [
  {
    id: 1,
    name: "Headset Pro X",
    price: 599.0,
    img: "🎧",
    featured: true,
    offer: false,
  },
  {
    id: 2,
    name: "Mouse Gamer Elite",
    price: 499.9,
    img: "🖱️",
    featured: true,
    offer: false,
  },
  {
    id: 3,
    name: "Mouse Gamer Elite (Oferta)",
    price: 499.9,
    img: "🖱️",
    featured: false,
    offer: true,
  },
];

/**
 * getProducts:
 * ------------
 * Função que simula uma chamada de API.
 *
 * Retorna uma Promise que resolve com a lista de produtos.
 *
 * Lógica:
 * - Utiliza setTimeout para simular atraso de rede
 * - Após 500ms, retorna os produtos
 *
 * Isso permite trabalhar com async/await como se fosse uma API real.
 */
export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}