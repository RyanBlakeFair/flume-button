import React from 'react';

import useLongPress from "./hooks/useLongPress";

function Video() {

    const [longPressCount, setlongPressCount] = React.useState(0)
    const [clickCount, setClickCount] = React.useState(0)

    const onLongPress = () => {
        console.log('longpress is triggered');
        setlongPressCount(longPressCount + 1)
    };

    const onClick = () => {
        console.log('click is triggered')
        setClickCount(clickCount + 1)
    }

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

    return (
        <div className="App">
            <button {...longPressEvent}>use  Loooong  Press</button>
            <span>Long press count: {longPressCount}</span>
            <span>Click count: {clickCount}</span>
        </div>
    );
}

export default Video;
