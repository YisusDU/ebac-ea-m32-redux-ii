import styled from "styled-components";
import { modalStyle } from "../../../theme/mixins";

const ModalHistoryContainer = styled.section`
  ${modalStyle()};

  &.hiddeModal {
    scale: 0;
  }
`;



export {
  ModalHistoryContainer,
};
