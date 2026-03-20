/**
 * Button.jsx
 * ----------------------------------------
 * Componente de botão reutilizável e genérico.
 *
 * Ele não possui lógica própria, sendo responsável apenas por
 * renderizar um botão com base nas propriedades recebidas.
 *
 * Toda a configuração (texto, estilo e comportamento) é definida
 * externamente, por quem utiliza o componente.
 */

const Button = ({ text, className, type, onClick }) => {
  return (
    <>
        {/**
         * type:
         * -----
         * Define o tipo do botão.
         * - Usa o valor recebido via props
         * - Caso não seja passado, assume "button" como padrão
         */}

        {/**
          * onClick:
          * --------
          * Define o comportamento do botão ao ser clicado.
          *
          * Essa função é recebida via props, permitindo que
          * o botão execute diferentes ações dependendo de onde é usado.
        */}

        {/**
        * className:
        * ----------
        * Responsável pela estilização do botão.
        *
        * - Se for passada uma classe, ela será aplicada
        * - Caso contrário, o botão não recebe estilos        adicionais
        */}

        {/**
        * text:
        * -----
        * Conteúdo exibido dentro do botão.
        *
        * Representa o texto visível para o usuário.
        */}
        
      <button 

        type={type || "button"}

        onClick={onClick}

        className={`
          ${className || ""}
        `}
      >
        {text}
      </button>
    </>
  );
};

export default Button;