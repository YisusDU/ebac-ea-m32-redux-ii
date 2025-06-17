import React from "react";
import { FooterCopyContainer } from "./styles";

const FooterCopy = () => {
  return (
    <FooterCopyContainer className="footer__copy">
      <p className="footer__text">
        Copyright © 2025 Hound Express. Todos los derechos reservados.
      </p>
      <a href="#" className="footer__text--link">
        Términos y condiciones
      </a>
      <a href="#" className="footer__text--link">
        Política de privacidad
      </a>
    </FooterCopyContainer>
  );
};

export default FooterCopy;
