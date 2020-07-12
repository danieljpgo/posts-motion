export const titleStagger = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

export const titleLetter = {
  initial: {
    // y: -100,
    opacity: 0,
  },
  animate: {
    // y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
