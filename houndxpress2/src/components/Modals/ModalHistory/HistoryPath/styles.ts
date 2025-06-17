import styled from "styled-components";
import { box, flex } from "../../../../theme/mixins";

const ModalHistoryPath = styled.section`
  ${flex("row", "start", "center")}
  ${box("100%", "0.5rem", "0")};
  gap: 7px;
`;

const ModalSVGContainer = styled.section`
  ${box("1%", "0.5rem", "0")};

  img {
    width: 1.5rem;
  }
`;

const ModalPathContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7px;
  ${box("100%", "0.5rem", "0")};

  h3 {
    font-size: 1.2rem;
    font-weight: bold;

    &.status--pending {
      color: orange;
    }

    &.status--transit {
      color: yellow;
    }

    &.status--delivered {
      color: green;
    }
  }
`;

export { ModalHistoryPath, ModalPathContent, ModalSVGContainer };
