import React, { useState, useEffect } from "react";
import "./style.scss";
import "../../styles/globalStyles.scss";
import logo from "../../../public/assets/logo.png";
import caldaChocolate from "../../../public/assets/caldaChocolate.png";
import Carousel from "../../components/carousel";
import Cards from "../../components/cards";
import insta from "../../../public/assets/insta.png";
import whats from "../../../public/assets/whats.png";
import face from "../../../public/assets/face.png";
import core from "../../../public/assets/core.png";
import linha1 from "../../../public/assets/linha1.png";
import linha2 from "../../../public/assets/linha2.png";
import linha3 from "../../../public/assets/linha3.png";
import linha4 from "../../../public/assets/linha4.png";
import linha5 from "../../../public/assets/linha5.png";

const bolos = [
  {
    title: "Bolo Aniversário",
    imgSrc: "/assets/bolo1.jpeg",
    desc: "Bolos com decoração á escolha do cliente, podendo também escolhes entre os recheios: brigadeiro, brigadeiro branco, frutas vermelhas, morango.",
  },
  {
    title: "Bolo Casamento",
    imgSrc: "/assets/bolo2.jpeg",
    desc: "Bolos com decoração á escolha do cliente, podendo também escolhes entre os recheios: brigadeiro, brigadeiro branco, frutas vermelhas, morango.",
  },
  {
    title: "Bolo Meme",
    imgSrc: "/assets/bolo3.jpeg",
    desc: "Bolos com decoração á escolha do cliente, podendo também escolhes entre os recheios: brigadeiro, brigadeiro branco, frutas vermelhas, morango.",
  },
  {
    title: "Bolo Padrão",
    imgSrc: "/assets/bolo4.jpeg",
    desc: "Bolos com decoração á escolha do cliente, podendo também escolhes entre os recheios: brigadeiro, brigadeiro branco, frutas vermelhas, morango.",
  },
  {
    title: "Bolo Infantil",
    imgSrc: "/assets/bolo5.jpeg",
    desc: "Bolos com decoração á escolha do cliente, podendo também escolhes entre os recheios: brigadeiro, brigadeiro branco, frutas vermelhas, morango.",
  },
];

const doces = [
  {
    title: "Copinhos Doces",
    imgSrc: "/assets/doce1.jpeg",
    desc: "Copinhos de chocolates recheados com brigadeiro ou brigadeiro branco.",
  },
  {
    title: "Doces Artesanais",
    imgSrc: "/assets/doce2.jpeg",
    desc: "Docinhos artesanais personalizados com o tema da festa.",
  },
  {
    title: "Doces Gourmet",
    imgSrc: "/assets/doce3.jpeg",
    desc: "Docinhos de festa no sabor nuttela, ninho com nuttela ou brigadeiro branco com frutas vermelhas.",
  },
  {
    title: "Doces Tradicionais",
    imgSrc: "/assets/doce4.jpeg",
    desc: "Docinhos de festa no sabor brigadeiro, paçoca ou brigadeiro branco.",
  },
  {
    title: "Doces Arco-Íris",
    imgSrc: "/assets/doce5.jpeg",
    desc: "Docinhos de festa no sabor Nuttela, ninho com Nuttela ou brigadeiro branco com frutas vermelhas.",
  },
];

const sobremesas = [
  {
    title: "Palia Italiana",
    imgSrc: "/assets/sobremesa1.jpeg",
    desc: "Palia Italiana de brigadeiro ou brigadeiro branco",
  },
  {
    title: "Empadas Doces",
    imgSrc: "/assets/sobremesa2.jpeg",
    desc: "Empadinhas de leite condensado ou ninho com Nutella",
  },
  {
    title: "Cookies com Gotas",
    imgSrc: "/assets/sobremesa3.jpeg",
    desc: "Cookies crocantes com gotas de chocolate.",
  },
  {
    title: "Barras Recheadas",
    imgSrc: "/assets/sobremesa4.jpeg",
    desc: "Barras super recheadas nos sabores mousse de maracujá, brigadeiro, mousse de morango ou brigadeiro branco ",
  },
  {
    title: "Brownies",
    imgSrc: "/assets/sobremesa5.jpeg",
    desc: "Brownies recheados com doce de leite, Nutella ou brigadeiro.",
  },
];

const images = [
  "/assets/bolo1.jpeg",
  "/assets/doce2.jpeg",
  "/assets/sobremesa5.jpeg",
  "/assets/bolo3.jpeg",
  "/assets/doce1.jpeg",
  "/assets/bolo4.jpeg",
  "/assets/doce5.jpeg",
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
                A melhor coisa que existe é poder aliar paixão e vocação, não é
                mesmo!? A Iti Malia é fruto da paixão por confeitaria aliada ao
                talento da confeiteira Zi Bittencourt.
              </p>

              <p>
                Zi sempre amou cozinhar e reunir os amigos para degustar suas
                maravilhas.
              </p>

              <p>
                Nossa missão é proporcionar satisfação á cada mordida para
                nossos clientes.
              </p>
              <p>Usamos produtos de qualidade e tudo é feito com muito amor.</p>

              <img src={linha4} alt="logo whats" />
            </div>
          </div>
        </section>

        <section id="produtos">
          <h2>
            {" "}
            <img src={linha2} alt="logo whats" /> NOSSOS PRODUTOS{" "}
            <img src={linha1} alt="logo whats" />
          </h2>
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
              <a
                href="https://www.instagram.com/itimaliaconfeitaria/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
