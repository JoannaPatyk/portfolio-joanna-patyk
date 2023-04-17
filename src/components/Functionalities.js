import React from 'react';
import functionality from '../utils/functionality';

function Functionalities() {
    return (
        <div className="functionalities-container">
            <h5>What can you find in the application?</h5>
            <div className="functionalities">
                {functionality.map(({ id, text, icon }) => {
                    return (
                        <div key={id} className="functionality">
                            <p className="icon">{icon}</p>
                            <p>{text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Functionalities;
