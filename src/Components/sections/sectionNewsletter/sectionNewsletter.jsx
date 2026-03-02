import "./sectionNewsletter.css";
import Button from "../../ui/button/button";

const SectionNewsletter = () => {
  return (
    <section className="newsletter-section fade-up" id="newsletter">
      <h2 class="section-title fade-up">Assine nossa Newsletter</h2>
      <p>Receba promoções e novidades direto no seu email ⚡</p>

      <form className="newsletter-form">
        <input type="email" placeholder="Digite seu email" required />
        <Button text="Enviar" type="submit" className="cta-button" />
      </form>
    </section>
  );
};

export default SectionNewsletter;
