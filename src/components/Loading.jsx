import { motion } from "framer-motion";
import { LoadingWrapper } from "../styles/Loading";
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
