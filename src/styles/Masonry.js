import styled from "styled-components";
import { motion } from "framer-motion";

export const MasonryItem = styled(motion.a)`
  display: block;
  margin: 0px 0px 8px 0px;

  &:hover {
    font-weight: bold;
  }
`;

export const MasonryVideo = styled.video`
  min-height: 400px;
  background-color: black;
  width: 100%;

  &:hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;

    @-webkit-keyframes flash {
      0% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes flash {
      0% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const MasonryImg = styled.img`
  min-height: 300px;
  background-color: black;
  width: 100%;

  &:hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;

    @-webkit-keyframes flash {
      0% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes flash {
      0% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const MasonryText = styled.p`
  font-size: 1.1rem;
  padding-top: 20px;
  padding-bottom: 25px;
`;
