import { motion } from "framer-motion";
import React from "react";

const LoadingDot = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "white",
  borderRadius: "50%",
};

const LoadingContainer = {
  width: "5rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around",
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Loading = () => {
  return (
    <div
      style={{
        paddingTop: "20rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
        <motion.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
        <motion.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
      </motion.div>
    </div>
  );
};

export default Loading;
