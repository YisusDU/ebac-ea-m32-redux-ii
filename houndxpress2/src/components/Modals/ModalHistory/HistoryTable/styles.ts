import styled from "styled-components";
import { sizesMedia } from "../../../../theme/variables";
import { cursorGrab, cursorGrabbing } from "../../../../theme/mixins";

const HistoryTableContainer = styled.section`
  //Responsive styles

  @media screen and (max-width: ${sizesMedia.xsm}) {
    overflow-x: scroll;
    ${cursorGrab()};
    ${cursorGrabbing()};
  }
`;

export { HistoryTableContainer };
