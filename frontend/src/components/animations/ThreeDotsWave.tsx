import React, { FC } from "react";
import { motion } from "framer-motion";

const loadingCircle = "bg-black flex w-2 h-2 justify-around rounded-md";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const ThreeDotsWave: FC = () => {
  return (
    <motion.div
      className="flex justify-around w-8 h-8"
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        className={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        className={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        className={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};

export default ThreeDotsWave;
