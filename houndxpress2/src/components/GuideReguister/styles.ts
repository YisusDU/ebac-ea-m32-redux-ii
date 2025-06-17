import styled from "styled-components";
import { pawsDown } from "../../theme/animations";
import { flex, box, colorBg, hover, active } from "../../theme/mixins";
import { primaryColor, secondaryColor } from "../../theme/variables";


//-- Forms

const GuideRegisterContainer = styled.article`
  ${flex("row", "center", "center")};
  ${box("60%", "0 auto", "1.25rem")};
  ${colorBg("#fff", secondaryColor)}
  overflow: hidden;
  ${pawsDown()};

  /*704px*/
  @media screen and (max-width: 44rem) {
    /*Registro de guías*/
    width: 95%;
  }
`;

const GuideContainer = styled.section`
  ${flex("column", "unset", "unset")};
  width: 100%;
  padding: 1.25rem;
  h2 {
    font-size: 1.5rem;
  }
`;

const GuideForm = styled.form`
  ${flex("column", "unset", "unset")};
  width: 100%;
  padding: 1.25rem;
  box-sizing: border-box;

  .guide__form--label {
    display: none;
  }
  label[For="guide__date"],
  label[For="guide__hour"] {
    display: flex;
    font-size: 1.2rem;
    margin-top: 0.625rem;
  }

  .guide__form--input,
  .guide__form--select {
    width: 95%;
    border: none;
    border-bottom: 0.125rem solid #fff;
    margin: 0.625rem auto;
    background-color: ${secondaryColor};
    color: #fff;
    cursor: text;
    font-size: clamp(0.9rem, 1.2rem, 1.4rem);
    height: fit-content;

    &::placeholder {
      color: #fff;
    }

    &:focus-visible {
      outline: none;
    }

    &.form__input--error {
      border-bottom: 0.125rem solid #ff0000;
    }

    &.form__input--correct {
      border-bottom: 0.125rem solid #77ff00;
    }
  }

  .error-message {
    font-size: 1rem;
    color: red;
    margin: 0;
    padding: 0;
  }
`;

const GuideSubmit = styled.button`
  width: fit-content;
  margin: 0 auto;
  border: none;
  padding: 0.3125rem;
  ${colorBg()};
  font-weight: bold;
  font-size: 1.2rem;
  border: 2px solid transparent;
  ${hover("trasparent")};
  ${active()};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border: ${primaryColor} solid 2px;
      background-color: ${secondaryColor};
      color: #fff;
    }
  }
`;

//--- Animation
const GuideAnimation = styled.section`
  position: relative;
  width: 40px;
  ${flex("column", "center", "center")};
  top: -500px;
  gap: 1.25rem;

  .guide__svg {
    top: 0;
    width: 2rem;
    position: relative;
  }

  .guide__svg--left {
    left: -1rem;
  }

  .guide__svg--right {
    left: 0rem;
  }
`;

export {
  GuideRegisterContainer,
  GuideContainer,
  GuideForm,
  GuideSubmit,
  GuideAnimation,
};
