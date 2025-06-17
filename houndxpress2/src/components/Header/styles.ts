import styled from "styled-components";
import { shine } from "../../theme/animations";
import { flex, box, hover, active } from "../../theme/mixins";
import { primaryColor, secondaryColor, sizesMedia } from "../../theme/variables";

const HeaderContainer = styled.header`
  ${flex("column", "start", "center")};
  width: fit-content;
  margin: 0 auto;
  z-index: 6;
  padding: 5px;
  transition: all 1s ease-in-out;

  &.fixed {
    position: fixed;
    background-color: #fff;
    padding: 1rem 0;
    width: 100dvw;
    align-items: center;
    box-shadow: 18px 8px 8px 7px rgb(0 0 0 / 20%);

    .header__top {
      display: none;
    }
  }

  .header__top {
    ${shine()};

    .header__logo {
      width: 15rem;
    }
  }

  // Responsive styles
  @media screen and (max-width: ${sizesMedia.md}) {
    width: 100%;
    ${flex("column", "center", "center")};
  }

  @media screen and (prefers-color-scheme: dark) {
    &.fixed {
      background-color: rgb(44 44 44 / 62%);
    }
  }
`;

const HeaderBottom = styled.section`
  ${flex("column", "center", "center")};
  ${box("fit-content", "0", "0")};
  background-color: ${primaryColor};
  padding-bottom: 0.625rem;

  // Responsive styles
  @media (max-width: ${sizesMedia.md}) {
    width: 100%;
    height: 64px;
    justify-content: flex-start;
  }
`;

const HeaderNav = styled.nav`
  ${flex("row", "center", "center")};

  // Responsive styles
  @media (max-width: ${sizesMedia.md}) {
    width: 80%;
    flex-direction: column;
    padding-top: 15px;
    z-index: 6;
    height: fit-content;
  }
`;

const HeaderIcons = styled.i`
  display: none;
  width: 2rem;
  color: #fff;
  transition: all 0.3s ease-in-out;
  height: 36.56px;

  img {
    ${hover("transparent")};
    ${active()};
    position: absolute;
  }

  .header__menuButton--show {
    width: 2rem;
    margin-left: 1rem;
    transition: all 0.3s ease-in-out;
  }

  .header__menuButton--hidde {
    scale: 0;
    width: 1.6rem;
    margin-left: 1rem;
    transition: all 0.3s ease-in-out;
    transform: rotate(0deg);
  }

  //Hidde class
  &.hidde {
    & {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    img:nth-of-type(1) {
      scale: 0;
    }

    img:nth-of-type(2) {
      scale: 1;
      transform: rotate(360deg);
      transition: all 0.5s ease-in-out;
    }
  }

  // Responsive styles
  @media (max-width: ${sizesMedia.md}) {
    display: flex;
    width: 100%;
    z-index: 10;
  }
`;

const HeaderLinksContainer = styled.div`
  ${flex("row", "start", "space-between")};
  background-color: ${primaryColor};
  width: 100%;
  gap: 2rem;
  transition: all 0.5s ease-in-out;

  .header__link {
    width: 100%;
    height: 52px;
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    text-wrap: nowrap;
    color: white;
    text-decoration: none;
    padding: 1.25rem;
    font-size: clamp(0.8rem, 1rem, 1.3rem);
    ${active()};
    ${hover(secondaryColor)};

    &:nth-of-type(5) {
      background-color: ${primaryColor};
      &:hover {
        color: ${secondaryColor};
      }
      ${hover("transparent")};
    }

    &:nth-of-type(6) {
      background-color: ${secondaryColor};
      ${hover(primaryColor)};
    }
  }

  // Responsive styles
  @media (max-width: ${sizesMedia.xl}) {
    .header__link {
      padding: 5px 7px;
    }
  }

  @media (max-width: ${sizesMedia.lg}) {
    & {
      gap: 0;
      transition: all 0.5s ease-in-out;
    }
  }

  @media (max-width: ${sizesMedia.md}) {
    flex-direction: column;
    transition: all 0.5s ease-in-out;
    transform: translateY(0);

    &.hidde {
      display: none;

      .header__link {
        scale: 1 0;
      }
    }

    .header__link {
      padding: 5px 7px;
      justify-content: flex-start;
      padding: 15px 25px;

      &:nth-of-type(6) {
        background-color: ${primaryColor};
        @include hover(${secondaryColor});
      }
    }

    .header__lineDecorative {
      padding: 1rem;
      width: 100%;
      background-color: ${secondaryColor};
    }
  }
`;

export {
  HeaderContainer,
  HeaderBottom,
  HeaderNav,
  HeaderIcons,
  HeaderLinksContainer,
};
