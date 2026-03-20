/**
 * Icon.jsx
 * ----------------------------------------
 * Componente genérico para renderização de ícones.
 *
 * Ele recebe um componente de ícone (vindo de bibliotecas como react-icons)
 * e retorna esse mesmo ícone já configurado com tamanho, cor, estilo e comportamento.
 *
 * Isso facilita a padronização e reutilização de ícones em toda a aplicação.
 */

export const Icon = ({ icone: IconComponent, size, color, className, onClick }) => {
  return (

    /**
     * IconComponent:
     * --------------
     * Representa o componente de ícone recebido via props.
     *
     * Exemplo:
     * FaShoppingCart, FaBars, FaTimes, etc.
     */

    <IconComponent

      /**
       * size:
       * -----
       * Define o tamanho do ícone.
       */
      size={size}

      /**
       * color:
       * ------
       * Define a cor do ícone.
       */
      color={color}

      /**
       * className:
       * ----------
       * Permite aplicar estilizações adicionais ao ícone.
       */
      className={className}

      /**
       * onClick:
       * --------
       * Define o comportamento do ícone ao ser clicado.
       */
      onClick={onClick}
    />
  );
};

