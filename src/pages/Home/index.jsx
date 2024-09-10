import React, { useState, useEffect } from "react";
import "./style.scss";
import "../../styles/globalStyles.scss";
import logo from "../../assets/logo.png";
import caldaChocolate from "../../assets/caldaChocolate.png";
import Carousel from "../../components/carousel";
import Cards from "../../components/cards";
import insta from "../../assets/insta.png";
import whats from "../../assets/whats.png";
import face from "../../assets/face.png";
import core from "../../assets/core.png";

const bolos = [
  {
    title: "bolo1",
    imgSrc:
      "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    desc: "Descrição do bolo 1.",
  },
  {
    title: "bolo2",
    imgSrc:
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    desc: "Descrição do bolo 2.",
  },
  {
    title: "bolo2",
    imgSrc:
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    desc: "Descrição do bolo 2.",
  },
  {
    title: "bolo2",
    imgSrc:
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    desc: "Descrição do bolo 2.",
  },
  {
    title: "bolo2",
    imgSrc:
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    desc: "Descrição do bolo 2.",
  },
];

const doces = [
  {
    title: "Leão",
    imgSrc:
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    desc: "Descrição do leão.",
  },
  {
    title: "Foca",
    imgSrc:
      "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    desc: "Descrição da foca.",
  },
  {
    title: "Foca",
    imgSrc:
      "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    desc: "Descrição da foca.",
  },
  {
    title: "Foca",
    imgSrc:
      "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    desc: "Descrição da foca.",
  },
  {
    title: "Foca",
    imgSrc:
      "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    desc: "Descrição da foca.",
  },
];

const sobremesas = [
  {
    title: "Leão",
    imgSrc:
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    desc: "Descrição do leão.",
  },
  {
    title: "Foca",
    imgSrc:
      "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    desc: "Descrição da foca.",
  },
  {
    title: "Foca",
    imgSrc:
      "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    desc: "Hawks are a group of medium-sized diurnal birds of prey of the family Accipitridae. Hawks are widely distributed and vary greatly in size. The subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned hawks and others. This subfamily are mainly woodland birds with long tails and high visual acuity. They hunt by dashing suddenly from a concealed perch.",
  },
  {
    title: "Foca",
    imgSrc:
      "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    desc: "Hawks are a group of medium-sized diurnal birds of prey of the family Accipitridae. Hawks are widely distributed and vary greatly in size. The subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned hawks and others. This subfamily are mainly woodland birds with long tails and high visual acuity. They hunt by dashing suddenly from a concealed perch.",
  },
  {
    title: "Foca",
    imgSrc:
      "https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    desc: "Hawks are a group of medium-sized diurnal birds of prey of the family Accipitridae. Hawks are widely distributed and vary greatly in size. The subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned hawks and others. This subfamily are mainly woodland birds with long tails and high visual acuity. They hunt by dashing suddenly from a concealed perch.",
  },
];

const images = [
  "https://3.bp.blogspot.com/-OxRffVDgZdc/YRp6okOUgGI/AAAAAAAAy14/Jwri_7U0FlAp1wnwX3JIRCqyx3AkeuSgACK4BGAYYCw/s1600/image-781124.jpg",
  "https://3.bp.blogspot.com/-OxRffVDgZdc/YRp6okOUgGI/AAAAAAAAy14/Jwri_7U0FlAp1wnwX3JIRCqyx3AkeuSgACK4BGAYYCw/s1600/image-781124.jpg",
  "https://3.bp.blogspot.com/-OxRffVDgZdc/YRp6okOUgGI/AAAAAAAAy14/Jwri_7U0FlAp1wnwX3JIRCqyx3AkeuSgACK4BGAYYCw/s1600/image-781124.jpg",
  "https://3.bp.blogspot.com/-OxRffVDgZdc/YRp6okOUgGI/AAAAAAAAy14/Jwri_7U0FlAp1wnwX3JIRCqyx3AkeuSgACK4BGAYYCw/s1600/image-781124.jpg",
  "https://3.bp.blogspot.com/-OxRffVDgZdc/YRp6okOUgGI/AAAAAAAAy14/Jwri_7U0FlAp1wnwX3JIRCqyx3AkeuSgACK4BGAYYCw/s1600/image-781124.jpg",
  "https://3.bp.blogspot.com/-OxRffVDgZdc/YRp6okOUgGI/AAAAAAAAy14/Jwri_7U0FlAp1wnwX3JIRCqyx3AkeuSgACK4BGAYYCw/s1600/image-781124.jpg",
  "https://3.bp.blogspot.com/-OxRffVDgZdc/YRp6okOUgGI/AAAAAAAAy14/Jwri_7U0FlAp1wnwX3JIRCqyx3AkeuSgACK4BGAYYCw/s1600/image-781124.jpg",
];

function Home() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <header className={`header ${visible ? "visible" : "hidden"}`}>
        <a className="logo" href="#inicio">
          <img src={logo} alt="Logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#produtos">Produtos</a>
            </li>

            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <img
        className={`caldaChocolate ${visible ? "visible" : "hidden"}`}
        src={caldaChocolate}
        alt="calda"
      />
      <main>
        <section id="inicio">
          <h1>Iti Malia Confeitaria </h1>
          <h2>
            Produtos feitos com amor por Zi Bittencourt!{" "}
            <img src={core} alt="" />
          </h2>
        </section>

        <section>
          <Carousel images={images} interval={4000} />
        </section>

        <section id="sobre">
          <div className="fundo">
            <div>
              <h2>Um pouquinho da nossa história:</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                vel nulla sunt earum debitis, suscipit pariatur deserunt sequi
                officia quae, sit rerum! Minima nesciunt accusantium delectus
                deserunt doloremque odit eaque! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Hic id officiis eos inventore sit
                nulla aperiam ipsum! Officia suscipit tenetur, illo est repellat
                at, ducimus voluptatum velit amet quaerat sequi!
              </p>
            </div>
          </div>
        </section>

        <section id="produtos">
          <h2>NOSSOS PRODUTOS:</h2>
          <h3>Bolos e tortas:</h3>

          <Cards cardsData={bolos} />

          <h3>Docinhos:</h3>
          <Cards cardsData={doces} />
          <h3>Sobremesas:</h3>
          <Cards cardsData={sobremesas} />
        </section>

        <section id="contato">
          <h2>EXPERIMENTE NOSSAS DELÍCIAS!</h2>
          <h3>Entre em contato:</h3>

          <ul>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={face} alt="logo whats" />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="logo insta" />
              </a>
            </li>

            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={whats} alt="logo whats" />
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© 2024 Iti Malia Confeitaria. Todos os direitos reservados.</p>
        <p>
          Site feito com ❤ por{" "}
          <a
            href="http://www.linkedin.com/in/hevelise-liz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hevelise Dias
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default Home;
