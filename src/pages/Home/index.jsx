import React from "react";
import "./style.scss";
import "../../styles/globalStyles.scss";
import logo from "../../assets/logo.png";
import caldaChocolate from "../../assets/caldaChocolate.png";
import titulo1 from "../../assets/titulo1.png";
import titulo2 from "../../assets/titulo2.png";
import titulo3 from "../../assets/titulo3.png";
import caldaMorango from "../../assets/caldaMorango.png";
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

      <main>
        <section className="apresentacao">
          <img className="caldaChocolate" src={caldaChocolate} alt="calda" />

          <div className="container_titulo">
            <img className="titulo1" src={titulo1} alt="titulo" />

            <img className="titulo2" src={titulo2} alt="titulo" />

            <img className="titulo3" src={titulo3} alt="titulo" />
          </div>
          <h2>Produtos feitos com amor por Zi Bittencourt! 💗</h2>
        </section>
      </main>
      <footer>
        <p>© 2024 Hevelise Dias. Todos os direitos reservados.</p></footer>
    </body>
  );
}

export default Home;
