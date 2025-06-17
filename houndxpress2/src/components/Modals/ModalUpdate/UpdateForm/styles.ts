import styled, { css } from "styled-components";
import {
  flex,
  box,
  colorBg,
  primaryColor,
  secondaryColor,
  hover,
  active,
} from "../../../../theme/mixins";

interface StageProp {
  $state?: string;
}

const ModalInpuSelect = () => css`
  width: 95%;
  border: none;
  border-bottom: 0.125rem solid #fff;
  margin: 0.625rem auto;
  ${colorBg("#fff", secondaryColor)}
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
`;

const ModalUpdateContainer = styled.section`
  width: 100%;
  position: relative;
  transform: translate(0);
  top: 0;
  left: 0;

  &::after {
    display: none;
  }
`;

const ModalForm = styled.form`
  ${flex("column", "stretch", "center")};
  ${box("60%", "1rem auto", "1rem")};
  ${colorBg("#fff", "transparent")};
  border: 2px solid ${primaryColor};
  gap: 0.3rem;

  .table__form--label:nth-of-type(1) {
    display: none;
  }

  .tableModal__input--error {
    border-color: #ff0000;
  }

  .error-message {
    font-size: 1rem;
    color: red;
    margin: 0;
    padding: 0;
    margin-bottom: 15px;
  }
`;

const ModalSelect = styled.select`
  ${ModalInpuSelect()};
`;

const ModalOptionSelect = styled.option<StageProp>`
  display: ${(props) => {
    if (props.$state?.includes("En tránsito")) return "none";
    return "flex";
  }};
`;

const ModalInput = styled.input`
  ${ModalInpuSelect()};
`;

const ModalFormSubmit = styled.button`
  width: fit-content;
  margin: 0 auto;
  border: none;
  padding: 0.3125rem;
  ${colorBg()};
  font-weight: bold;
  font-size: 1.2rem;
  border: 2px solid ${primaryColor};
  ${hover(secondaryColor)}
  ${active()}
`;

const ModalMessage = styled.h3`
 text-align: center;
 margin: 10px;
 font-weight: bold;
`;

export {
  ModalUpdateContainer,
  ModalForm,
  ModalSelect,
  ModalOptionSelect,
  ModalInput,
  ModalFormSubmit,
  ModalMessage,
};
