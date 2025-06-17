import React, { useEffect, useState } from "react";
import BannerCanva from "../../assets/IMG/bannerCanva-HX.png";
import BannerLogistics from "../../assets/IMG/bannerUS__HX.png";
import {
  BannerContainer,
  CarouselContainer,
  CarouselImages,
  CarouselNav,
} from "./styles";

const Banner = () => {
  //Capture the input radio position
  const [position, setPosition] = useState<"left" | "right">("left");

  //Function to listen the scroll event and change the position of the carousel
  useEffect(() => {
    /* console.log("Position changed:", position); */
  }, [position]);

  return (
    /* <!--Banner--> */
    <BannerContainer className="banner">
      <CarouselContainer className="carousel">
        <CarouselImages className="carousel__images" $position={position}>
          <article className="carousel__element">
            <img
              className="banner__img"
              src={BannerCanva}
              alt="bannerCanva-HX"
            />
          </article>
          <article className="carousel__element">
            <img
              className="banner__img"
              src={BannerLogistics}
              alt="Banner-HX-logistics"
            />
          </article>
        </CarouselImages>
        <CarouselNav className="carousel__nav" $position={position}>
          <div onClick={() => setPosition("left")}>⬅️</div>
          <div onClick={() => setPosition("right")}>➡️</div>
        </CarouselNav>
      </CarouselContainer>
    </BannerContainer>
  );
};

export default Banner;
