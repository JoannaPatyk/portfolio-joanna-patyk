import React from 'react';
import technologies from '../utils/technologies';
import technologyIcons from '../utils/technologyIcons';

function Technologies() {
    return (
        <div className="technologies-container">
            <div className="technologies-title-container">
                <h5>Technologies and libraries used in the project.</h5>
                <div className="technologies-icon-container">
                    <div className="technologies-icon">
                        {technologyIcons.map(({ id, icon }) => (
                            <div key={id} className="technology-icon">
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="technologies">
                {technologies.map(({ id, text }) => {
                    return <h3 key={id}>{text}</h3>;
                })}
            </div>
        </div>
    );
}

export default Technologies;
