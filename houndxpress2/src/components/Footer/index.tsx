import React from "react";
import { FooterContainer } from "./styles";
import FooterAbout from "./FooterAbout";
import FooterCopy from "./FooterCopy";


const Footer = () => {
  return (
    <FooterContainer>
      <FooterAbout />
      <FooterCopy />
    </FooterContainer>
  );
};

export default Footer;
