import styled from "styled-components";
import { cursorGrab, cursorGrabbing } from "../../../../theme/mixins";
import { sizesMedia } from "../../../../theme/variables";

const UpdateTableContainer = styled.section`
  position: relative;
  transform: translate(0);
  top: 0;
  left: 0;

  &::after {
    display: none;
  }

  //Responsive styles
  @media screen and (max-width: ${sizesMedia.md}) {
    width:100%;
    overflow-x: scroll;
    ${cursorGrab()};
    ${cursorGrabbing()};
    
  }
`;

export { UpdateTableContainer };
