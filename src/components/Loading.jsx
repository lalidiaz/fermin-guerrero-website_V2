import { motion } from "framer-motion";
import styled from "styled-components";
import {
  DotTransition,
  LoadingDot,
  LoadingContainer,
  ContainerVariants,
  DotVariants,
} from "../utils/animations";

const Loading = () => {
  return (
    <LoadingWrapper>
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </LoadingWrapper>
  );
};

export default Loading;

const LoadingWrapper = styled.div`
  padding-top: 20rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
