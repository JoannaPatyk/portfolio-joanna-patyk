import React from 'react';
import technologies from '../utils/technologies';
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiAxios, SiMongodb, SiExpress } from 'react-icons/si';

function Technologies() {
    return (
        <div className="technologies-container">
            <div className="technologies-title-container">
                <h5>Technologies and libraries used in the project.</h5>
                <div className="technologies-icon">
                    <FaCss3Alt />
                    <FaHtml5 />
                    <FaReact />
                    <IoLogoJavascript />
                    <SiAxios />
                    <SiMongodb />
                    <FaNodeJs />
                    <SiExpress />
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
