import "./sectionProducts.css";
import Card from "../../ui/Card/card";
import Button from "../../ui/button/button";


const SectionProducts = ({handleAddToCart}) => {
  const products = [
    { id: 1, name: "Headset Pro X", price: 599.0 },
    { id: 2, name: "Mouse Gamer Elite", price: 499.9 },
    { id: 3, name: "Mouse Gamer Elite (Oferta)", price: 499.9 },
  ];
  return (
    <div>
      <section className="products-section fade-up" id="products">
        <h2 className="section-title fade-up">Produtos em destaque</h2>

        <div className="products-grid">
          {products.map((product) => (
            <Card 
            key = {product.id}
            buttonText = "Comprar"
            onButtonClick = {() => handleAddToCart(product)}
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
