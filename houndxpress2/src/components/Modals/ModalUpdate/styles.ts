import styled from "styled-components";
import { flex, modalStyle } from "../../../theme/mixins";

const ModalUpdateContainer = styled.section`
  ${flex("column", "center", "center")};
  ${modalStyle()};
  /* width: auto;
  padding: 0; */

  &.hiddeModal {
    scale: 0;
  }
`;

export { ModalUpdateContainer };
