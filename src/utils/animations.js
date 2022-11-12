export const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

export const masonryAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const LoadingDot = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "white",
  borderRadius: "50%",
};

export const LoadingContainer = {
  width: "5rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around",
};

export const ContainerVariants = {
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

export const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

export const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};
