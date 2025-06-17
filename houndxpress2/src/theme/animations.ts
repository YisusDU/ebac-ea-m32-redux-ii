import { keyframes, css } from "styled-components";

// Animations for the shine effect on hover

const shineKeyframes = keyframes`
    100% {
    left: 225%;
  }
`;

const shine = () => css`
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    left: -175%;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: 2;
    content: "";
    background: -webkit-linear-gradient(to right, #6ac6de00 0%, #6ac6deab 100%);
    background: linear-gradient(to right, #6ac6de00 0%, #6ac6deab 100%);
    transform: skewX(-25deg);
    cursor: pointer;
  }

  &:hover::before {
    animation: ${shineKeyframes} 1s forwards;
  }
`;

//Animation for the paws transition
const pawsDownKeyframes = keyframes`
    100% {
            top: -100px;
        }
`;

const pawsMadeKeyframes = keyframes`
    0% {
            scale: .8;
        }

        100% {
            scale: .8;
        }
`;

const pawsDown = () => css`
  &:hover {
    .guide__animation {
      animation: ${pawsDownKeyframes} 2s forwards;
    }

    .guide__svg {
      animation: ${pawsMadeKeyframes} 2s forwards;

      &:nth-child(1) {
        animation-delay: 1.7s;
      }
  
      &:nth-child(2) {
        animation-delay: 1.4s;
      }
  
      &:nth-child(3) {
        animation-delay: 1.1s;
      }
  
      &:nth-child(4) {
        animation-delay: 0.8s;
      }
  
      &:nth-child(5) {
        animation-delay: 0.5s;
      }
    }

  }
`;

export { shine, pawsDown };
