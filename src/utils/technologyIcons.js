import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { SiAxios, SiMongodb, SiExpress } from 'react-icons/si';

const technologyIcons = [
    { id: 0, icon: <FaCss3Alt />, name: 'CSS3' },
    { id: 1, icon: <FaHtml5 />, name: 'HTML5' },
    { id: 2, icon: <FaReact />, name: 'React' },
    { id: 3, icon: <IoLogoJavascript />, name: 'JavaScript' },
    { id: 4, icon: <SiAxios />, name: 'Axios' },
    { id: 5, icon: <SiMongodb />, name: 'MongoDB' },
    { id: 6, icon: <IoLogoNodejs />, name: 'Node.js' },
    { id: 7, icon: <SiExpress />, name: 'Express' }
];

export default technologyIcons;
