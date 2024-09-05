import React, { useState, useEffect } from "react";
import "./style.scss";
import "../../styles/globalStyles.scss";
import logo from "../../assets/logo.png";
import caldaChocolate from "../../assets/caldaChocolate.png";
import Carousel from "../../components/carousel";
import insta from "../../assets/insta.png";
import whats from "../../assets/whats.png";
import face from "../../assets/face.png";

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
          <h2>Produtos feitos com amor por Zi Bittencourt!</h2>
        </section>

        <section>
          <Carousel images={images} interval={4000} />
        </section>

        <section id="sobre">
          <div>
            <div>
              <h2>UM POUQUINHO DA NOSSA HISTÓRIA:</h2>

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
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>Docinhos:</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>Sobremesas:</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
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
