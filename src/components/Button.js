import React from 'react';
import PropTypes from 'prop-types';

function Button({ id, children, onClick, type = 'button' }) {
    return (
        <button id={id} type={type} onClick={onClick} className="btn">
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};

export default Button;
