import React from 'react';
import styled from 'styled-components';
import images from '../utils/images';
import logo from '../assets/logo-dark.png';
import Slider from '../components/Slider';
import Technologies from '../components/Technologies';
import Functionalities from '../components/Functionalities';
import Link from '../components/Link';

function Project() {
    return (
        <Wrapper>
            <div className="projects-container">
                <div className="main-information-container">
                    <h2>Main Project</h2>
                    <h1>Household Expenses Tracker</h1>
                    <h5>Why household expenses tracker application?</h5>
                    <p>
                        For several years, I have been keeping track of my monthly expenses. A household budget is a
                        tool that helps to better control expenses and save money. By using it, it is easier to
                        determine spending priorities and avoid impulsive purchases. Budgeting also allows tracking
                        progress in achieving financial goals. That's why I chose such a project - I wanted to create a
                        fully functional application for tracking my expenses. And I did it!
                    </p>
                    <img src={logo} className="logo" alt="Logo" />
                </div>
                <Technologies />
                <div className="description-container">
                    <p>
                        I have created a fully functioning application called the{' '}
                        <span>Household Expenses Tracker (HET)</span>, which is used to track expenses and monitor
                        financial situations. It allows for expense recording and planning, adding expense categories,
                        provides simple statistics, and enables the creation and management of a group of people with
                        whom expenses can be shared.
                    </p>
                    <p>
                        The <span>HET</span> frontend was created using the <span>React </span>framework and libraries
                        such as <span>React Router</span> for navigation, <span>prop-types</span> for prop type
                        checking, <span>axios</span> library for API communication, <span>styled-components</span>{' '}
                        library for application styling, and <span>React-Toastify</span> for displaying messages.
                    </p>
                    <p>
                        The application's backend - a <span>REST API</span> - was written using the{' '}
                        <span>Express.js</span>
                        framework with the <span>Node.js</span> platform. I used bcrypt for user password hashing and{' '}
                        <span>JSON Web Token</span> for user authentication. The backend uses the <span>MongoDB</span>
                        database through the <span>Mongoose</span> library.
                    </p>
                </div>

                <Slider array={images} />
                <Functionalities />
                <Link />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .projects-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }

    .main-information-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-weight: 400;

        color: var(--primary-500);
        letter-spacing: var(--smallLetterSpacing);
        text-transform: uppercase;
    }

    .main-information-container p {
        width: 70%;
        font-size: 0.95rem;
        line-height: 1.6rem;
        text-align: center;
    }

    .main-information-container h5 {
        margin: 0;
    }

    .main-information-container h1 {
        font-weight: 100;
        font-size: 3.5rem;
        color: var(--secondary-500);
        text-shadow: 1px 1px 5px var(--secondary-300);
        border-bottom: 4px double var(--secondary-500);
        font-family: var(--titleFont);
        text-align: center;
        margin: 1rem 0;
    }

    .logo {
        width: 35vw;
        margin: 0 1rem 1rem 1rem;
    }

    .technologies-container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .technologies {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 0.7rem;
        row-gap: 0.8rem;
        width: 60%;
    }

    .technologies h3 {
        place-self: center stretch;
        color: var(--primary-500);
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        text-align: center;
        border: 2px solid var(--secondary-500);
        border-radius: 5px;
        padding: 0.25rem 1rem;
        transition: var(--transition);
    }

    .technologies h3:hover {
        color: var(--black);
        background-color: var(--secondary-500);
    }

    .description-container {
        margin: 3rem 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h5,
    p {
        font-weight: 400;

        color: var(--primary-500);
        letter-spacing: var(--smallLetterSpacing);
        line-height: 2rem;
        text-align: justify;
        margin: 0 0 1rem 0;
        width: 80%;
    }

    h5 {
        text-align: center;
        font-size: 1rem;
    }

    span {
        font-weight: 600;
    }

    .btn {
        width: 35rem;
        margin-bottom: 2rem;
    }

    .functionalities-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 2rem;
    }

    .functionality {
        width: 60%;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1rem;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
    }

    .functionality p {
        width: 90%;
        font-size: 0.9rem;
        line-height: 1.3rem;
        margin-bottom: 0;
    }

    .functionality .icon {
        width: 10%;
        font-size: 3rem;
        line-height: 1.5rem;
    }

    .gallery,
    .slider,
    .link-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .slider {
        flex-direction: row;
    }

    img {
        width: 100%;
    }

    .btn-left,
    .btn-right {
        font-size: 3rem;
        color: var(--primary-500);
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    hr {
        width: 80%;
        margin-bottom: 2rem;
    }
`;

export default Project;
