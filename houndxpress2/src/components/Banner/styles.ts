import styled from "styled-components";
import { flex, hover, active, cursorNotAllowed } from "../../theme/mixins";
import { secondaryColor } from "../../theme/variables";

interface CheckedProps {
  $position: "left" | "right";
}

const BannerContainer = styled.article`
  width: 100%;
  margin-bottom: 2rem;
  box-sizing: border-box;
`;

const CarouselContainer = styled.section`
  ${flex("column", "unset", "space-evenly")};
  overflow: hidden;
  width: 100%;
  height: 100%;

  input[type="radio"] {
    display: none;
  }
`;

const CarouselImages = styled.section<CheckedProps>`
  ${flex("row", "stretch", "stretch")};
  width: 200%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) =>
    props.$position === "left" ? "translateX(0)" : "translateX(-50%)"};

  .carousel__element {
    ${flex("row", "center", "center")};
    width: 100%;
    background-color: ${secondaryColor};

    .banner__img {
      width: 100%;
      height: 100%;
      max-height: 34.38rem;
      transition: opacity 0.5s ease-in-out;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      padding: 0.625rem;
      //   object-fit: contain;
    }
  }
`;

const CarouselNav = styled.section<CheckedProps>`
  ${flex("row", "center", "space-between")};
  width: 100%;
  min-width: 19rem;
  position: absolute;
  margin-top: 0.625rem;
  height: max-content;

  div {
    cursor: pointer;
    padding: 0.3125rem;
    background-color: #8ab5c1;
    margin: 0 0.3125rem;
    border-radius: 50%;
    z-index: 5;
    ${hover("#8e9cb3c0")};
    ${active()};
  }
  ${(props) =>
    props.$position === "left"
      ? `
        label[for="slide1"] {
          filter: grayscale(100%);
          ${cursorNotAllowed()};
        }
        `
      : `
        label[for="slide2"] {
          filter: grayscale(100%);
          ${cursorNotAllowed()};
        }
        `}
`;

export { BannerContainer, CarouselContainer, CarouselImages, CarouselNav };
