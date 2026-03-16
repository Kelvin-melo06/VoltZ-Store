import "./sectionOffers.css";
import Card from "../../ui/Card/card";
import Button from "../../ui/button/Button.jsx";
import SectionTitle from "../../ui/SectionTitle.jsx";

const SectionOffers = () => {
  return (
    <section
      className="
     py-20
     px-[5%]
     bg-[#00BFFF]
     fade-up"
      id="offers"
    >
      <SectionTitle>Ofertas Da Semana</SectionTitle>
      <div
        className="
      grid
      gap-10
      mt-12
      [grid-template-columns:repeat(auto-fit, minmax(300px, 1fr))]
      fade-up
      "
      >
        <Card
          className="
        group
        bg-[#1A1A1A]
        rounded-[20px]
        p-8
        transition-all
        duration-300
        border-2
        border-transparent
        relative
        animate-[flutuante_3s_ease-in-out_infinite]
        hover:border-[#00BFFF]
        hover:shadow-[0_10px_40px_rgba(0,191,255,0.4)]
        fade-up"
          ActionButton={Button}
        >
          <div
            className="
          absolute
          top-4
          right-1
          bg-red-500
          text-white
          text-sm
          font-bold
          px-3
          py-1
          rounded-full
          "
          >
            -17%
          </div>
          <div
            className="
            w-[95%]
            h-[250px]
            relative
            top-6
            bg-gradient-to-br
            from-[#0D0D0D]
            to-[#1A1A1A]
            rounded-[15px]
            mb-6
            flex
            items-center
            justify-center
            text-[4rem]
            transition-all
            duration-300
            group-hover:scale-105
            group-hover:drop-shadow-[0_0_20px_#00BFFF]
          "
          >
            🖱️
          </div>
          <h3
            className="
          font-['Orbitron']
          text-[1.4rem]
          font-semibold
          mb-2
          text-[#F2F2F2]
          relative
          top-3
          "
          >
            Mouse Gamer Elite
          </h3>
          <p
            className="
            text-[1.4rem]
            font-bold
            text-white
            mb-4
            relative
            top-4
          "
          >
            De <span className="line-through text-gray-400">R$ 599,90</span> por{" "}
            <span className="text-[#00BFFF] text-xl font-bold">R$ 499,90</span>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default SectionOffers;
