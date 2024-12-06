import { motion } from "framer-motion";

const fadeUpVariants = {
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
      delay,
    },
  }),
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const AnimateContent = ({ children, isVisible = true, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeUpVariants}
      animate={isVisible ? "visible" : "hidden"}
      initial="hidden"
      custom={delay}
    >
      {children}
    </motion.div>
  );
};
export default AnimateContent;
