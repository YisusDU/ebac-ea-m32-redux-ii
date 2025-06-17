import styled from "styled-components";
import { flex, box, colorBg } from "../../theme/mixins";
import { shine } from "../../theme/animations";
import { sizesMedia, secondaryColor } from "../../theme/variables";

const GeneralStateContainer = styled.article`
  ${flex("rrow", "center", "space-between")};
  ${box("100%", "0 auto", "1.25rem")};
  ${colorBg()};

  // Responsive Design/*528px*/
  @media screen and (max-width: 33rem) {
    ${flex("column", "center", "center")};
    text-align: center;
  }
`;

const StateContainer = styled.section`
  ${flex("column", "unset", "unset")};
  ${shine};
  width: 50%;

  .state__title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
`;

const StateElement = styled.article`
  ${flex("row", "center", "space-between")};
  width: 100%;
  padding: 1.25rem;
  margin: 0 auto;
  box-sizing: border-box;
  color: #fff;
  text-align: center;

  // Responsive Design
  @media (max-width: ${sizesMedia.lg}) {
    flex-direction: column;
  }
`;

const StateGroup = styled.section`
  padding: 1.25rem;
  box-sizing: border-box;

  &:nth-of-type(2) {
    border-left: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
  }

  .state__subject {
    font-size: clamp(1rem, 1.5rem, 1.7rem);
    height: 9.38rem;
  }

  .state__info {
    font-size: clamp(1rem, 2rem, 4rem);
    font-weight: bold;
    margin: 0;
    color: ${secondaryColor};
  }

  // Responsive Design
  @media (max-width: ${sizesMedia.lg}) {
    &:nth-of-type(2) {
      border: none;
      border-top: 0.125rem solid #fff;
      border-bottom: 0.125rem solid #fff;
    }

    .state__subject {
      height: fit-content;
    }
  }
`;

const StatePicture = styled.section`
  width: 30%;

  .state__img {
    width: 80%;
    height: auto;
    min-width: 12rem;
  }

  // Responsive Design
  @media (max-width: ${sizesMedia.xmd}) {
    width: 40%;
  }

  @media (max-width: ${sizesMedia.xsm}) {
    text-align: center;
    ${flex("column", "center", "center")};
  }
`;

export {
  GeneralStateContainer,
  StateContainer,
  StateElement,
  StateGroup,
  StatePicture,
};
