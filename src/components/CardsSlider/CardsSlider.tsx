import React from "react";
import Slider from "react-slick";
import type { IDesignTeamCard } from "../../types/IDesignTeamCard";
import ArchitectCard from "../ArchitectCard/ArchitectCard";
import { CustomPrevArrow, CustomNextArrow } from "../CustomArrow/CustomArrow";
import styles from "./CardsSlider.module.scss";

type Props = {
  cards: IDesignTeamCard[];
};

const CardsSlider: React.FC<Props> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className={styles.cardItem}>
            <ArchitectCard member={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardsSlider;
