import React from "react";
import Logo from "../../../assets/IMG/M6-imagotipo-Hound_Express/logoAzulBlancoHE.png";
import Facebook from "../../../assets/IMG/square-facebook-brands.svg";
import Instagram from "../../../assets/IMG/instagram-brands.svg";
import Twitter from "../../../assets/IMG/twitter-brands.svg";
import {
  FooterAboutContainer,
  FooterSocialMedia,
  FooterPicture,
  FooterSocialIcons,
  FooterDescription,
  FooterNavContainer,
  FooterNav,
} from "./styles";

const FooterAbout = () => {
  return (
    <FooterAboutContainer className="footer__about">
      <FooterSocialMedia className="footer__socialmedia">
        <FooterPicture className="footer__picture">
          <a href="index.html">
            <img
              className="footer__img"
              src={Logo}
              alt="imagotipo-Hound_Express"
            />
          </a>
          <FooterSocialIcons className="footer__socialIcons">
            <i>
              <img
                src={Facebook}
                alt="facebook"
                className="Footer__socialImg"
              />
            </i>
            <i>
              <img
                src={Instagram}
                alt="instagram"
                className="Footer__socialImg"
              />
            </i>
            <i>
              <img src={Twitter} alt="twitter" className="Footer__socialImg" />
            </i>
          </FooterSocialIcons>
        </FooterPicture>
        <FooterDescription className="footer__description">
          Somos un equipo de expertos en logística, tecnología y comercio
          internacional. Te queremos ayudar a llevar tu empresa al siguiente
          nivel con soluciones de importación, exportación y logística nacional
          e internacional.
        </FooterDescription>
      </FooterSocialMedia>
      <FooterNavContainer className="footer__navContainer">
        <h2 className="footer__title">Somos</h2>
        <h2 className="footer__title">Hound Express</h2>
        <FooterNav className="footer__nav">
          <a className="footer__link" href="index.html">
            Inicio
          </a>
          <a className="footer__link" href="#guide__register">
            Registro de Guías
          </a>
          <a className="footer__link" href="#general__state">
            Estado General
          </a>
          <a className="footer__link" href="#guide__list">
            Lista de Guías
          </a>
          <a className="footer__link" href="#">
            Buscar Guías
          </a>
          <a className="footer__link" href="#">
            Historial de Guías
          </a>
        </FooterNav>
      </FooterNavContainer>
    </FooterAboutContainer>
  );
};

export default FooterAbout;
