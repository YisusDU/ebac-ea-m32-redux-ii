import styled from "styled-components";
import { shine } from "../../../theme/animations";
import { sizesMedia } from "../../../theme/variables";
import {
  colorBg,
  flex,
  box,
  active,
  hover,
  secondaryColor,
} from "../../../theme/mixins";


const FooterAboutContainer = styled.article`
  ${colorBg()};
  ${flex("row", "center", "center")};
  ${box("80%", "0 auto", "1.25rem")};
  color: #fff;
  text-align: center;

  //Responsive styles
  @media screen and (max-width: ${sizesMedia.md}) {
    flex-direction: column;
  }
`;

const FooterSocialMedia = styled.section`
  ${flex("column", "center", "center")};
  ${box("100%", "0 auto", "1.25rem")};
  color: #fff;
  text-align: center;
  gap: 1.5rem;
`;

const FooterPicture = styled.picture`
  ${flex("column", "center", "center")};
  ${box("100%", "0 auto", "0")}
  color: #fff;
  text-align: center;
  gap: 1.5rem;
  ${shine()};

  .footer__img {
    width: 50%;
    min-width: 12.5rem;
  }
`;

const FooterSocialIcons = styled.figcaption`
  ${flex("row", "center", "space-evenly")};
  width: 100%;

  img {
    ${flex("row", "center", "center")};
    font-size: 2rem;
    cursor: pointer;
    width: 30px;
    ${active()};
    ${hover(secondaryColor)}
  }
`;

const FooterDescription = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: #fff;
  text-align: justify;
  line-height: normal;
`;

const FooterNavContainer = styled.section`
  ${flex("column", "start", "center")};
  ${box("100%", "0 auto", "0")}
  color: #fff;
  text-align: center;

  .footer__title {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    font-weight: bold;

    &:first-of-type {
      color: ${secondaryColor};
    }
  }
`;

const FooterNav = styled.nav`
  ${flex("row", "start", "start")};
  ${box("100%", "0.625rem auto", "0")};
  color: #fff;
  text-align: center;
  gap: 1.5rem;

  .footer__link {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: 0.625rem 0;
    text-align: center;
    ${hover()};

    &:hover {
      color: ${secondaryColor};
    }
  }

  //Responsive styles

  @media screen and (max-width: ${sizesMedia.md}) {
    flex-direction: column;
  }
`;

export {
  FooterAboutContainer,
  FooterSocialMedia,
  FooterPicture,
  FooterSocialIcons,
  FooterDescription,
  FooterNavContainer,
  FooterNav,
};
