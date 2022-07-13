import React from 'react'
import cx from 'classnames'
import { motion } from "framer-motion";

import useLongPress from "../hooks/useLongPress";

const cardVariants = {
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

const recordVars = {
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

const flashVars = {
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

const Button = ({ children, videoMode, flip }) => {
    const [active, setActive] = React.useState(false)

    //detect presses
    const onLongPress = () => {
        console.log('longpress is triggered');
    };

    const onClick = () => {
        console.log('click is triggered')
        toggleClick()
    }

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };

    const [longPressTriggered, setLongPressTriggered] = React.useState(false);
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions, videoMode, longPressTriggered, setLongPressTriggered);
    const [clickTriggered, setClickTriggered] = React.useState(false);
    const toggleClick = () => setClickTriggered(prev => !prev)

    return (
        <>
            <div
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <motion.button
                    className="card relative bg-white w-[200px] md:w-[300px] h-[330px] md:h-[430px]"
                    variants={cardVariants}
                    initial="initial"
                    animate={active ? "animate" : "initial"}
                    {...longPressEvent}
                >
                    {children}

                    {/* Record Animation */}
                    {longPressTriggered && <motion.div variants={recordVars} initial="initial" animate="animate" className={cx('absolute h-6 w-6 top-6 bg-red-500 rounded-full', {
                        'left-6': flip,
                        'right-6': !flip,
                    })} />}
                </motion.button>
            </div>

            {/* Flash Effect */}
            <motion.div key={clickTriggered} variants={flashVars} initial="initial" animate="animate" className='fixed top-0 z-50 left-0 w-full h-screen bg-white pointer-events-none' />
        </>
    )
}

export default Button