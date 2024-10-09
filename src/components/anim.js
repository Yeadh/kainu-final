export const cardVariant = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      y: {
        duration: 1,
      },
      delay: 0.5 + i * 0.3, // incrementing delay for element
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const leftAnimVariant = {
  initial: {
    opacity: 0,
    x: -20,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      x: {
        duration: 1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const rightAnimVariant = {
  initial: {
    opacity: 0,
    x: 20,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      x: {
        duration: 1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const bottomAnimVariant = {
  initial: {
    opacity: 0,
    y: 40,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      y: {
        duration: 1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
