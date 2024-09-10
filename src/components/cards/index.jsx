import React from "react";
import "./style.scss";

const Card = ({ title, imgSrc, desc }) => (
  <div className="card">
    <h2 className="card-title">{title}</h2>
    <img src={imgSrc} alt={title} />
    <p className="card-desc">{desc}</p>
  </div>
);

const Cards = ({ cardsData }) => {
  return (
    <div className="cards">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imgSrc={card.imgSrc}
          desc={card.desc}
        />
      ))}
    </div>
  );
};

export default Cards;