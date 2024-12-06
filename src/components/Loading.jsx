import { motion } from "framer-motion";
import styled from "styled-components";
import {
  DotTransition,
  ContainerVariants,
  DotVariants,
} from "../utils/animations";

const loadingContainer = {
  display: "flex",
  gap: "0.5rem",
};

const Loading = () => {
  const dots = Array(3).fill(null);

  return (
    <LoadingWrapper>
      <motion.div
        style={loadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        {dots.map((_, index) => (
          <Dot key={index} variants={DotVariants} transition={DotTransition} />
        ))}
      </motion.div>
    </LoadingWrapper>
  );
};

export default Loading;

const Dot = styled(motion.span)`
  width: 0.5rem;
  height: 0.5rem;
  background-color: white;
  border-radius: 50%;
`;

const LoadingWrapper = styled.div`
  padding-top: 20rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
