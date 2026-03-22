/**
 * SectionNewsletter.jsx
 * ----------------------------------------
 * Componente responsável pela seção de newsletter do site.
 *
 * Essa seção permite que o usuário insira seu email
 * para receber promoções e novidades.
 *
 * Não possui lógica de envio real (API),
 * sendo apenas uma estrutura visual com formulário.
 */

import Button from "@/Components/ui/button/Button.jsx";
import SectionTitle from "@/Components/ui/SectionTitle.jsx";

const SectionNewsletter = () => {
  return (
    <section 
      /**
       * ID:
       * ----
       * Utilizado para navegação via âncoras (menu).
       */
      id="newsletter"

      /**
       * Estilização:
       * ------------
       * Define espaçamento, alinhamento e cores da seção.
       */
      className="
        py-20
        px-[5%]
        text-center
        bg-[#0D0D0D]
        fade-up
      "
    >

      {/**
       * Título da seção:
       * ----------------
       * Utiliza o componente reutilizável SectionTitle
       * para manter padrão visual no projeto.
       */}
      <SectionTitle>
        Assine nossa Newsletter
      </SectionTitle>
      
      {/**
       * Descrição:
       * ----------
       * Texto informativo incentivando o usuário a se inscrever.
       */}
      <p className="text-white font-[500]">
        Receba promoções e novidades direto no seu email ⚡
      </p>

      {/**
       * Formulário:
       * -----------
       * Estrutura para captura do email do usuário.
       *
       * Atualmente não possui integração com backend,
       * sendo apenas visual/estrutural.
       */}
      <form className="
        mt-8
        flex
        flex-col
        justify-center
        items-center
        gap-4
        flex-wrap
      ">

        {/**
         * Input de email:
         * ---------------
         * Campo obrigatório para entrada do email.
         */}
        <input 
          type="email"
          placeholder="Digite seu email" 
          required
          className="
            p-4
            rounded-full
            border-[3px]
            border-[#1A1A1A]
            bg-[#121212]
            w-[400px]
            mb-[10px]
            h-[60px]
            text-white
            outline-none
          "
        />

        {/**
         * Botão:
         * ------
         * Utiliza o componente Button reutilizável.
         *
         * type="submit" indica envio do formulário.
         */}
        <Button 
          text="Enviar" 
          type="submit" 
          className="cta-button" 
        />

      </form>
    </section>
  );
};

export default SectionNewsletter;