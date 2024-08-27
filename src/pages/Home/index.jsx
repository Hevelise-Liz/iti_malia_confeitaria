import React from "react";
import "./style.scss";
import "../../styles/globalStyles.scss";
import logo from "../../assets/logo.png";
import caldaChocolate from "../../assets/caldaChocolate.png";
import titulo1 from "../../assets/titulo1.png";
import titulo2 from "../../assets/titulo2.png";
import titulo3 from "../../assets/titulo3.png";
import Carousel from "../../components/carousel";

const images = [
  "https://3.bp.blogspot.com/-OxRffVDgZdc/YRp6okOUgGI/AAAAAAAAy14/Jwri_7U0FlAp1wnwX3JIRCqyx3AkeuSgACK4BGAYYCw/s1600/image-781124.jpg",
  "https://folhago.com.br/blogs/receitas-faceis/wp-content/uploads/2021/07/torta-holandesa-globo.jpg",
  "https://www.dci.com.br/wp-content/uploads/2020/07/15_16_07_769_pudim.jpg",
  "https://i.pinimg.com/736x/e8/00/a4/e800a4c587e9ddf414956131d6281fd0.jpg",
  "https://i.pinimg.com/originals/9f/97/e0/9f97e0662043055b7d00e8e37d20faf6.jpg",
  "https://i.pinimg.com/736x/95/8d/bf/958dbfcf8b233f92f0fef9a824c2bd0e.jpg",
];

function Home() {
  return (
    <body>
      <header>
        <a className="logo" href="">
          <img src={logo} alt="Logo" />
        </a>
        <nav>
          <ul>
            <li>Início</li>
            <li>Produtos</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
      <img className="caldaChocolate" src={caldaChocolate} alt="calda" />
      <main>
        <section className="apresentacao">
       

          <div className="container_titulo">
            <img className="titulo1" src={titulo1} alt="titulo" />

            <img className="titulo2" src={titulo2} alt="titulo" />

            <img className="titulo3" src={titulo3} alt="titulo" />
          </div>
          <h2>Produtos feitos com amor por Zi Bittencourt! 💗</h2>
        </section>

        <section>
        <Carousel images={images} interval={4000} />
        </section>

<section>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel nulla sunt earum debitis, suscipit pariatur deserunt sequi officia quae, sit rerum! Minima nesciunt accusantium delectus deserunt doloremque odit eaque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic id officiis eos inventore sit nulla aperiam ipsum! Officia suscipit tenetur, illo est repellat at, ducimus voluptatum velit amet quaerat sequi!

  </p>

  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ea veritatis, eum velit iure enim eveniet delectus laborum esse. Suscipit excepturi ex rerum amet at aut laborum dignissimos deleniti expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quis nobis nihil iste quasi cumque placeat cum, veritatis sint adipisci quidem enim, impedit veniam! Eveniet illo illum labore consectetur corporis!</p>
</section>



      </main>
      <footer>
        <p>© 2024 Iti Malia Confeitaria. Todos os direitos reservados.</p>
        <p>Site feito com ❤ por <a href="http://www.linkedin.com/in/hevelise-liz" target="_blank" rel="noopener noreferrer">Hevelise Dias.</a></p>
      </footer>
    </body>
  );
}

export default Home;
