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
            ActionButton = { () => ( 
              <Button onClick = {() => handleAddToCart(product)} 
              text= "Comprar"/>
            )}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionProducts;
