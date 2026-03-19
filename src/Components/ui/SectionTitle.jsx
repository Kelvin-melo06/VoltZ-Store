/**
 * SectionTitle.jsx
 * ----------------------------------------
 * Componente reutilizável para títulos das seções da aplicação.
 *
 * Sua principal função é padronizar o estilo dos títulos,
 * evitando repetição de código e facilitando a manutenção.
 */

const SectionTitle = ({ children }) => {
  return (

    /**
     * children:
     * ---------
     * Representa o conteúdo que será passado para o componente.
     *
     * Exemplo de uso:
     * <SectionTitle>Produtos em destaque</SectionTitle>
     *
     * O texto passado será renderizado aqui e receberá toda a estilização.
     */
    <div
      className="
        font-['Orbitron']
        text-[28px]
        md:text-4xl
        mb-12
        text-center
        text-[#F2F2F2]
        relative
        inline-block
        after:content-['']
        after:absolute
        after:left-1/2
        after:bottom-[-10px]
        after:h-[3px]
        after:w-[0px]
        after:-translate-x-1/2
        after:bg-gradient-to-r
        after:from-transparent
        after:via-[#00BFFF]
        after:to-transparent
        after:transition-all
        after:duration-300
        hover:after:w-[120px]
        fade-up
      "
    >
      {children}
    </div>
  );
};

export default SectionTitle;