export const fadeInUp = {
  inital: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const transitionImg = {
  duration: 0.6,
  ease: [0.6, 0.01, -0.05, 0.96],
};
