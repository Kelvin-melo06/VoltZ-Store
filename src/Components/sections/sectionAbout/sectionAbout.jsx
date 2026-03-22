/**
 * SectionAbout.jsx
 * ----------------------------------------
 * Componente responsável pela seção "Sobre" do site.
 *
 * Essa seção apresenta informações sobre a marca,
 * destacando seus valores e diferenciais através de texto e ícones.
 *
 * Utiliza:
 * - SectionTitle -> para padronização do título
 * - Icon -> para renderizar ícones de forma reutilizável
 * - react-icons -> biblioteca de ícones
 */

import "./sectionAbout.css";
import { Icon } from "@/Components/ui/icon/Icon.jsx";
import { FaRocket, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import SectionTitle from "@/Components/ui/SectionTitle.jsx";

const SectionAbout = () => {
  return (
    <section

      /**
       * ID:
       * ----
       * Usado para navegação via menu (âncoras).
       */
      id="about"

      /**
       * Estilização:
       * ------------
       * Define espaçamento, cores e alinhamento da seção.
       */
      className="
        py-[20px]
        px-[5%]
        bg-[#0D0D0D]
        text-center 
        fade-up
      "
    >

      {/**
       * Título:
       * -------
       * Utiliza o componente reutilizável SectionTitle.
       */}
      <SectionTitle>
        Sobre a VoltZ Store
      </SectionTitle>

      {/**
       * Descrição:
       * ----------
       * Texto que apresenta a proposta e identidade da marca.
       */}
      <p className="
        text-[20px]
        text-white
      ">
        Criadores de conteúdo e entusiastas de gadgets. Buscamos qualidade,
        inovação e design moderno em cada produto.
      </p>

      {/**
       * Bloco de diferenciais:
       * ----------------------
       * Contém ícones com pequenas descrições
       * representando os pontos fortes da empresa.
       */}
      <div className="
        flex
        justify-center
        gap-12
        mt-8
        flex-wrap
        animation-[flutuante_3s_ease-in-out_infinite]
        fade-up
      ">

        {/**
         * Item 1 - Entrega rápida
         */}
        <div className="icon-box">
          <Icon
            icone={FaRocket}
            size={52}
            color="#00BFFF"
          />
          <p className="text-2xl mt-4">Entrega rápida</p>
        </div>

        {/**
         * Item 2 - Produtos inovadores
         */}
        <div className="icon-box">
          <Icon
            icone={FaLightbulb}
            size={52}
            color="#FFD700"
          />
          <p className="text-2xl mt-4">Produtos inovadores</p>
        </div>

        {/**
         * Item 3 - Garantia e suporte
         */}
        <div className="icon-box">
          <Icon
            icone={FaShieldAlt}
            size={52}
            color="#808080"
          />
          <p>Garantia e suporte</p>
        </div>

      </div>
    </section>
  );
};

export default SectionAbout;