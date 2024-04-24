export const framerError = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}

export const framerInView = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { type: 'spring', duration: 2, ease: "easeInOut", bounce: 0.25 },
    viewport: { once: true, amount: 0.5 },

}

export const framerInViewHover = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { type: 'spring', duration: 2, ease: "easeInOut", bounce: 0.25 },
    viewport: { once: true, amount: 0.5 },
    whileHover: {
        scale:1.05,
        rotate:1,
        transition: {
            duration: 0.2,
        },
    },
}

export const framerPage = {
    initial:{ opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

export const framerHomePage = {
    animate:{
        rotate: [1, 0, -1, 0, 1],
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8,
            
        },
    },
        
    
}

export const framerZoomJump = {
    whileHover: {
        y: -2,
        scale: 1.3,
        transition: {
            duration: 0.5,
            y: {
                repeat: Infinity,
                repeatType: "reverse"
            }
        },
    },
}