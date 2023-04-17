import React from 'react';
import technologies from '../utils/technologies';

function Technologies() {
    return (
        <div className="technologies-container">
            <h5>Technologies and libraries used in the project:</h5>
            <div className="technologies">
                {technologies.map(({ id, text }) => {
                    return <h3 key={id}>{text}</h3>;
                })}
            </div>
        </div>
    );
}

export default Technologies;
