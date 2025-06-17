import styled from "styled-components";
import { flex, box, colorBg, secondaryColor } from "../../../theme/mixins";
import { sizesMedia } from "../../../theme/variables";

const FooterCopyContainer = styled.article`
  ${flex("row", "center", "space-evenly")};
  ${box("100%", "0 auto", "0.625rem")};
  text-align: center;
  ${colorBg("#fff", secondaryColor)};
  line-height: normal;
  
  .footer__text--link {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: 0.625rem 0;
    text-align: center;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  //Responsive styles

  @media screen and (max-width: ${sizesMedia.md}) {
    flex-direction: column;

    .footer__text {
      margin: 0;
      padding: 0;
    }

    .footer__text--link {
      margin: 0;
      padding: 0;
    }
  }
`;

export { FooterCopyContainer };
