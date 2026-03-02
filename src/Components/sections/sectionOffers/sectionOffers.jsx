import "./sectionOffers.css";
import Card from "../../ui/Card/card";
import Button from "../../ui/button/button";

const SectionOffers = () => {
  return (
    <section className="offers-section fade-up" id="offers">
      <h2 className="section-title fade-up">Ofertas Da Semana</h2>
      <div className="offers-grid">
        <Card className="offer-card fade-up" ActionButton={Button}>
          <div className="product-image">🖱️</div>
          <h3>Mouse Gamer Elite</h3>
          <p>
            De R$ 599,90 por <strong>R$ 499,90</strong>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default SectionOffers;
