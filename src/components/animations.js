export const cardVars = {
    initial: {
        y: 300
    },
    animate: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export const recordVars = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: .5,
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
}

export const flashVars = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            duration: .2,
            ease: "easeInOut",
            repeatType: "reverse",
        }
    },
}