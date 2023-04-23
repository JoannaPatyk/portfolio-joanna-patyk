import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

function AnimatedElement({ children, threshold = 0.5 }) {
    const [show, setShow] = useState(false);

    const props = useSpring({
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0%)' : 'translateY(50%)'
    });

    const observer = useRef(
        new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                }
            },
            { threshold }
        )
    );

    const ref = useRef();

    useEffect(() => {
        const observerRef = observer.current;
        observer.current.observe(ref.current);

        return () => observerRef.disconnect();
    }, []);

    return (
        <animated.div ref={ref} style={props}>
            {children}
        </animated.div>
    );
}

AnimatedElement.propTypes = {
    children: PropTypes.object,
    threshold: PropTypes.number
};

export default AnimatedElement;
