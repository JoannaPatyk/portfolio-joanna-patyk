import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TfiShiftLeftAlt, TfiShiftRightAlt } from 'react-icons/tfi';

function Slider({ array }) {
    const [currentIndex, setCurrentIndex] = useState(1);

    const goToNextSlide = () => {
        let nextIndex = currentIndex + 1;

        if (nextIndex === array.length) {
            nextIndex = 1;
        }

        setCurrentIndex(nextIndex);
    };

    const goToPrevSlide = () => {
        let nextIndex = currentIndex - 1;

        if (nextIndex < 1) {
            nextIndex = array.length;
        }
        setCurrentIndex(nextIndex);
    };
    return (
        <div className="slider-container">
            <h5>How does the application look like?</h5>
            <div className="slider">
                <button onClick={goToPrevSlide} className="btn-left">
                    <TfiShiftLeftAlt />
                </button>
                {array.map(({ id, src, alt }) => (
                    <img key={id} src={src} alt={alt} style={{ display: id === currentIndex ? 'block' : 'none' }} />
                ))}
                <button onClick={goToNextSlide} className="btn-right">
                    <TfiShiftRightAlt />
                </button>
            </div>
        </div>
    );
}

Slider.propTypes = {
    array: PropTypes.array
};

Slider.defaultProps = {
    array: []
};

export default Slider;
