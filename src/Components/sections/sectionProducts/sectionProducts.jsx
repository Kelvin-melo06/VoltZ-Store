/**
 * SectionProducts.jsx
 * ----------------------------------------
 * Componente responsável por exibir os produtos em destaque da loja.
 *
 * Ele realiza:
 * - Busca de dados (simulando uma API)
 * - Filtragem de produtos
 * - Integração com o carrinho (Context API)
 * - Renderização dinâmica dos produtos
 */

import "./sectionProducts.css";
import Card from "@/Components/ui/Card/card.jsx";
import { getProducts } from "@/services/products.js";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "@/context/CartContext";
import SectionTitle from "@/Components/ui/SectionTitle.jsx";

const SectionProducts = () => {

  /**
   * products (state):
   * -----------------
   * Armazena a lista de produtos que será exibida na tela.
   *
   * Inicialmente começa vazio e é preenchido após a busca dos dados.
   */
  const [products, setProducts] = useState([]);

  /**
   * Context API:
   * ------------
   * Acessa a função global de adicionar itens ao carrinho.
   */
  const { addToCart } = useContext(CartContext);

  /**
   * useEffect - Carregamento dos produtos:
   * --------------------------------------
   * Executado quando o componente é montado.
   *
   * Responsável por:
   * - Buscar os produtos (simulando uma API)
   * - Filtrar apenas os produtos desejados (featured === true)
   * - Atualizar o estado com os produtos filtrados
   */
  useEffect(() => {
    async function loadProducts() {

      // Busca os dados da "API"
      const data = await getProducts();

      /**
       * Filtragem:
       * ----------
       * Mantém apenas os produtos marcados como "featured"
       * (excluindo produtos de oferta, por exemplo).
       */
      const productsOfHere = data.filter(prod => prod.featured);

      // Atualiza o estado com os produtos filtrados
      setProducts(productsOfHere);
    }

    loadProducts();
  }, []);

  return (
    <section
      id="products"
      className="
      py-20
      px-[5%]
      bg-[#0D0D0D]
      text-center
      fade-up
      "
    >

      {/**
       * SectionTitle:
       * -------------
       * Componente reutilizável para títulos das seções.
       */}
      <SectionTitle>
        Produtos em destaque
      </SectionTitle>

      <div
        className="
        grid
        gap-10
        mt-12
        justify-center
        [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]
        "
      >

        {/**
         * Renderização dinâmica:
         * ----------------------
         * Percorre a lista de produtos e renderiza um Card para cada item.
         */}
          
        {products.map((product) => (

          <Card
            key={product.id}

            buttonText="Comprar" // texto do botão

            buttonClasseName="
            w-full
            py-3
            border-2
            border-[#00BFFF]
            rounded-[10px]
            font-semibold
            text-[#00BFFF]
            transition-all
            duration-300
            hover:bg-[#00BFFF]
            hover:text-[#0D0D0D]
            hover:shadow-[0_0_20px_rgba(0,191,255,0.6)]
            hover:scale-[1.02]
            "

            
            onButtonClick={() => addToCart(product)} // add no carrinho

            className="
            w-full
            max-w-[800px]
            group
            bg-[#1A1A1A]
            rounded-[20px]
            p-8
            border-2
            border-transparent
            relative
            transition-all
            duration-300
            overflow-hidden
            animate-[flutuante_3s_ease-in-out_infinite]
            hover:border-[#00BFFF]
            hover:shadow-[0_10px_40px_rgba(0,191,255,0.4)]
            hover:-translate-y-1
            fade-up
            "
          >

            {/**
             * Imagem do produto (visual):
             */}
            <div
              className="
              w-full
              h-[250px]
              bg-gradient-to-br
              from-[#0D0D0D]
              to-[#1A1A1A]
              rounded-[15px]
              mb-6
              flex
              items-center
              justify-center
              text-[4rem]
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:drop-shadow-[0_0_20px_#00BFFF]
              "
            >
              {product.img}
            </div>

            {/**
             * Nome do produto:
             */}
            <div
              className="
              text-[1.4rem]
              font-semibold
              mb-2
              text-[#F2F2F2]
              "
            >
              {product.name}
            </div>

            {/**
             * Preço do produto:
             * -----------------
             * Utiliza toFixed(2) para limitar em duas casas decimais.
             */}
            <div
              className="
              text-[1.8rem]
              font-bold
              text-[#5CE1E6]
              mb-4
              "
            >
              R$ {product.price.toFixed(2)}
            </div>

          </Card>

        ))}

      </div>

    </section>
  );
};

export default SectionProducts;