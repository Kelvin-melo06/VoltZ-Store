import { useState } from "react";
import SectionTitle from '../../ui/SectionTitle'

const faqs = [
  {
    question: "Quanto tempo leva para entrega?",
    answer: "Normalmente entre 3 a 7 dias úteis."
  },
  {
    question: "Posso trocar de produto?",
    answer: "Sim, dentro de 30 dias após a compra."
  }
];

const SectionFaq = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-[5%] bg-[#0D0D0D] text-center" id="faq">

      <SectionTitle>
        Perguntas Frequentes
      </SectionTitle>

      {faqs.map((faq, index) => {

        const isOpen = openIndex === index;

        return (

          <div
            key={index}
            onClick={() => toggleFaq(index)}
            className="bg-[#1A1A1A] rounded-[15px] p-[1.8rem] mb-6 cursor-pointer transition-all duration-300 border-2 border-transparent hover:border-[#00BFFF] hover:shadow-[0_8px_25px_rgba(0,191,255,0.3)]"
          >

            <h3
              className={`
              mb-2
              text-[18px]
              font-semibold
              relative
              pl-6
              before:absolute
              before:left-[-10px]
              before:top-[3px]
              before:text-[1.2rem]
              text-white
              ${isOpen ? "before:content-['✅'] before:text-[#5CE1E6]" : "before:content-['❓']"}
              `}
            >
              {faq.question}
            </h3>

            <p
              className={`
              font-light overflow-hidden transition-all duration-300
              ${isOpen ? "max-h-[200px] p-[1rem] text-white" : "max-h-0 px-[1.8rem] py-0"}
              `}
            >
              {faq.answer}
            </p>

          </div>

        );
      })}

    </section>
  );
};

export default SectionFaq;