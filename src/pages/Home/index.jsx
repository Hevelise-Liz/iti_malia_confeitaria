import React from "react";
import "./style.scss";
import "../../styles/globalStyles.scss";
import logo from "../../assets/logo.png";
import calda2 from "../../assets/calda2.png";
import titulo from "../../assets/titulo.png";
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
        <a className="calda" href="">
          <img src={calda2} alt="calda" />
        </a>
        <a className="titulo" href="">
          <img src={titulo} alt="titulo" />
        </a>
        <h2>Produtos feitos com amor para adoçar sua vida! 💗</h2>
        </section>

      </main>
      <footer>© 2024 Hevelise Dias. Todos os direitos reservados.</footer>
    </body>
  );
}

export default Home;
