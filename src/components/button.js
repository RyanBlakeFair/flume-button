import React from 'react'
import { motion } from "framer-motion";

import useLongPress from "../hooks/useLongPress";
import { cardVars, recordVars, flashVars } from './animations';

const Button = ({ children, videoMode }) => {
    //Animation State
    const [active, setActive] = React.useState(false)

    // Console Log Button Events
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

    // Long Press State
    const [longPressTriggered, setLongPressTriggered] = React.useState(false);
    const longPressEvent = useLongPress(
        onLongPress,
        onClick,
        defaultOptions,
        videoMode,
        longPressTriggered,
        setLongPressTriggered,
        active,
        setActive
    );

    //Trigger Camera Flash
    const [clickTriggered, setClickTriggered] = React.useState(false);
    const toggleClick = () => setClickTriggered(prev => !prev)

    return (
        <>
            <div
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <motion.button
                    className="text-[164px] shadow-2xl flex items-center justify-center rounded-2xl relative bg-white w-[200px] md:w-[300px] h-[330px] md:h-[430px]"
                    variants={cardVars}
                    initial="initial"
                    animate={active ? "animate" : "initial"}
                    {...longPressEvent}
                >
                    {children}

                    {/* Record Animation */}
                    {longPressTriggered && <motion.div variants={recordVars} initial="initial" animate="animate" className='absolute h-6 w-6 top-6 right-6 bg-red-500 rounded-full' />}
                </motion.button>
            </div>

            {/* Flash Effect */}
            <motion.div key={clickTriggered} variants={flashVars} initial="initial" animate="animate" className='fixed top-0 z-50 left-0 w-full h-screen bg-white pointer-events-none' />
        </>
    )
}

export default Button