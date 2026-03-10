import "./sectionProducts.css";
import Card from "../../ui/Card/card";
import { getProducts} from '../../../services/products.js';
import { useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
 
const SectionProducts = ({}) => {
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
      <section className="products-section fade-up" id="products">
        <h2 className="section-title fade-up">Produtos em destaque</h2>

        <div className="products-grid">
          {products.map((product) => (
            <Card 
            key = {product.id}
            buttonText = "Comprar"
            onButtonClick = {() => addToCart(product) }
            > 
            <div className="product-image">🎧</div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">R$ {product.price.toFixed(2)}</div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionProducts;
