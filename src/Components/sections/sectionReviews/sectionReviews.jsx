import "./sectionReviews.css";
import Card from "../../ui/Card/card";
import SectionTitle from "../../ui/SectionTitle";
import { data } from "autoprefixer";

const SectionReviews = () => {
  const reviews = [
    {
      id: 1,
      img: "💬",
      p: " Adorei o suporte premium, muito prático e resistente. ",
      pessoa: "- Ana, Gamer",
    },
    {
      id: 2,
      img: "💬",
      p: "O Headset Pro X mudou totalmente minha experiência de jogo!”",
      pessoa: "- Laura, Gamer",
    },
  ];
  return (
    <section
      id="reviews"
      className="
    py-20
    px-[5%]
    bg-[#0D0D0D]
    fade-up
    "
    >
      <SectionTitle>O que Dizem nossos clientes:</SectionTitle>

      <div className="grid gap-10 mt-12 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {reviews.map((rev) => (
          <Card key={rev.pessoa} className="reviews-card fade-up w-full md:max-w-[600px] mx-auto">
            <p>
              <span>{rev.img}</span> {rev.p} {rev.pessoa}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SectionReviews;
