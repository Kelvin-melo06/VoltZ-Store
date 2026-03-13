import "./sectionProducts.css";
import Card from "../../ui/Card/card";
import { getProducts} from '../../../services/products.js';
import { useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
 
const SectionProducts = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() =>{
    async function loadProducts(){
      const data = await getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <div>
      <section 
      id="products"
      className="
      py-20
      px-[5%]
      bg-[#0D0D0D]
      fade-up
      ">
        <h2 
        className="
        text-4xl
        font-bold
        tex-center
        text-[#F2F2F2]
        mb-12
        fade-up
        ">
          Produtos em destaque
        </h2>

        <div 
        className ="
        grid
        gap-10
        mt-12
        [grid-template-columns:repeat(auto-fit, minmax(260px, 1fr))]
        ">
          {products.map((product) => (
            <Card 
            key = {product.id}
            buttonText = "Comprar"
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
            onButtonClick = {() => addToCart(product) }
            className="
            group
            bg-[#1A1A1A]
            rounded-[20px]
            p-8
            transition-all
            duration-300
            border-2
            border-transparent
            relative
            overflow-hidden
            animate-[flutuante_3s_ease-in-out_infinite]
            hover:border-[#00BFFF]
            hover:shadow-[0_10px_40px_rgba(0, 191, 255, 0.4)]
            hover:-translate-y-1
            "
            > 
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
            ">
              {product.img}
            </div>
            <div 
            className="
            text-[1.4rem]
            font-semibold
            mb-2
            text-[#F2F2F2]
            ">
              {product.name}
            </div>
            <div 
            className="
            text-[1.8rem]
            font-bold
            text-[#5CE1E6]
            mb-4
            ">
              R$ {product.price.toFixed(2)}
            </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionProducts;
