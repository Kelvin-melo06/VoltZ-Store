import "./sectionAbout.css";
import { Icon } from "../../ui/icon/Icon.jsx";
import { FaRocket, FaLightbulb, FaShieldAlt } from "react-icons/fa";

const SectionAbout = () => {
  return (
    <section className="about-section fade-up" id="about">
      <h2
        className="
      section-title
      fade-up"
      >
        Sobre a VoltZ Store
      </h2>

      <p>
        criadores de conteúdo e entusiastas de gadgets. Buscamos qualidade,
        inovação e design moderno em cada produto.
      </p>

      <div className="about-icons">
        <div className="icon-box">
          <Icon
            icone={FaRocket}
            size={32}
            color="#00BFFF"
            className="icon-Alone"
          />
          <p>Entrega rápida</p>
        </div>

        <div className="icon-box">
          <Icon
            icone={FaLightbulb}
            size={32}
            color="#FFD700"
            className="icon-Alone"
          />
          <p>Produtos inovadores</p>
        </div>

        <div className="icon-box">
          <Icon
            icone={FaShieldAlt}
            size={32}
            color="#808080"
            className="icon-Alone"
          />
          <p>Garantia e suporte</p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
