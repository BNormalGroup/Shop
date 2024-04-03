import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { Link } from "react-router-dom";
import { useStyles } from "./RoundaboutClothingStyle.ts";

const RightArrowCarousel = () => {
  return (
    <svg
      width="12"
      height="21"
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L11 10.5L1 20" stroke="black" />
    </svg>
  );
};
const LeeftArrowCarousel = () => {
  return (
    <svg
      width="12"
      height="21"
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 1L1 10.5L11 20" stroke="black" />
    </svg>
  );
};

export const RoundaboutClothing = ({ images }: { images: string[] }) => {
  const classes = useStyles();

  return (
    <>
      <Carousel
        show={4}
        slide={4}
        className={classes.carousel}
        swiping={false}
        rightArrow={
          <div className={classes.arrowWrapper}>
            <RightArrowCarousel />
          </div>
        }
        leftArrow={
          <div className={classes.arrowWrapper}>
            <LeeftArrowCarousel />
          </div>
        }
      >
        {images.map((img: string, index) => {
          return (
            <Link key={index} to={"/"}>
              <img alt =''  className={classes.image} src={img} />
            </Link>
          );
        })}
      </Carousel>
    </>
  );
};
