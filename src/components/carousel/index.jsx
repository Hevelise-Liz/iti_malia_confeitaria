import React, { useState, useEffect } from "react";
import "./style.scss";

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(autoSlide);
  }, [currentIndex, interval]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? images.length - slidesToShow
      : currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? 0 : newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex >= images.length - slidesToShow;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{ width: `${100 / slidesToShow}%` }}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
