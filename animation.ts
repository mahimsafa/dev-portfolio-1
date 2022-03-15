export const fadeInUp = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            damping: 10,
            stiffness: 100,
        },
    },
};

export const fadeOut = {
    initial: {
        opacity: 1,
        y: 0,
    },
    animate: {
        opacity: 0,
        y: -60,
        transition: {
            delay: 0.2,
            duration:1,
            type: "spring",
            damping: 10,
            stiffness: 100,
        },
    },
};

export const stagger = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const routeAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};