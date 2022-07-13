import { useCallback, useRef } from "react";

const useLongPress = (
    onLongPress,
    onClick,
    { shouldPreventDefault = true, delay = 500 } = {},
    videoMode,
    longPressTriggered,
    setLongPressTriggered,
) => {
    const timeout = useRef();
    const target = useRef();

    const start = useCallback(
        event => {
            console.log('Button Pressed')
            if (shouldPreventDefault && event.target) {
                event.target.addEventListener("touchend", preventDefault, {
                    passive: false
                });
                target.current = event.target;
            }
            timeout.current = setTimeout(() => {
                videoMode && onLongPress(event);
                videoMode && setLongPressTriggered(true);
            }, delay);
        },
        [onLongPress, delay, shouldPreventDefault, videoMode, setLongPressTriggered]
    );

    const clear = useCallback(
        (event, shouldTriggerClick = !videoMode) => {
            timeout.current && clearTimeout(timeout.current);
            shouldTriggerClick && !longPressTriggered && onClick();
            videoMode && setLongPressTriggered(false);
            console.log('Button Released')
            if (shouldPreventDefault && target.current) {
                target.current.removeEventListener("touchend", preventDefault);
            }
        },
        [shouldPreventDefault, onClick, longPressTriggered, videoMode, setLongPressTriggered]
    );

    return {
        onMouseDown: e => start(e),
        onTouchStart: e => start(e),
        onMouseUp: e => clear(e),
        onTouchEnd: e => clear(e)
    };
};

const isTouchEvent = event => {
    return "touches" in event;
};

const preventDefault = event => {
    if (!isTouchEvent(event)) return;

    if (event.touches.length < 2 && event.preventDefault) {
        event.preventDefault();
    }
};

export default useLongPress;
