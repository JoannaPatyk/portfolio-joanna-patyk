import React from 'react';
import styled from 'styled-components';
import images from '../utils/images';
import Slider from '../components/Slider';
import Technologies from '../components/Technologies';
import Functionalities from '../components/Functionalities';
import Link from '../components/Link';

function Project() {
    return (
        <Wrapper>
            <div className="projects-container">
                <div className="main-information-container">
                    <h2>Main project</h2>
                    <h1>Household Expenses Tracker</h1>
                    <div className="reason-container">
                        <h5>Why household expenses tracker application?</h5>
                        <p>
                            For several years, I have been keeping track of my monthly expenses. A household budget is a
                            tool that helps to better control expenses and save money. By using it, it is easier to
                            determine spending priorities and avoid impulsive purchases. Budgeting also allows tracking
                            progress in achieving financial goals. That's why I chose such a project - I wanted to
                            create a fully functional application for tracking my expenses. And I did it!
                        </p>
                    </div>
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
                <Functionalities />
                <Slider array={images} />
                <Link />
                <h2>Other projects</h2>
                <p>Other projects that have been done by me can be found on my github profile.</p>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .projects-container,
    .main-information-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .projects-container {
        position: relative;
    }

    .main-information-container {
        padding: 6rem 0 2rem 0;
    }

    h2 {
        font-weight: 400;
        color: var(--primary-500);
        letter-spacing: var(--smallLetterSpacing);
        text-transform: uppercase;
    }

    h5,
    p {
        margin: 1rem;
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 2rem;
        text-align: justify;
        color: var(--primary-500);
        letter-spacing: var(--smallLetterSpacing);
    }

    h5 {
        font-weight: 600;
        text-align: center;
        font-size: 1.4rem;
    }

    .main-information-container h5 {
        margin: 0;
    }

    .main-information-container h1 {
        font-weight: 100;
        font-size: 3.5rem;
        color: var(--secondary-500);
        text-shadow: 1px 1px 5px var(--secondary-300);
        font-family: var(--titleFont);
        text-align: center;
        margin: 1rem 0;
    }

    .reason-container {
        width: 70%;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .reason-description {
        padding: 1rem;
        border-radius: 5px;
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
        width: 60%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 0.8rem;
        row-gap: 0.8rem;
    }

    .technologies h3 {
        place-self: center stretch;
        color: var(--primary-500);
        font-weight: 600;
        font-size: 1rem;
        text-transform: uppercase;
        text-align: center;
        border: 2px solid var(--secondary-500);
        box-shadow: 1px 1px 2px var(--secondary-300);
        border-radius: 30px;
        padding: 0.25rem 1rem;
        transition: var(--transition);
    }

    .technologies h3:hover {
        color: var(--black);
        background-color: var(--secondary-500);
    }

    .description-container {
        width: 70%;
        margin: 3rem 0 1rem 0;
        display: flex;
        align-items: center;
        flex-direction: column;
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
        width: 80%;
    }

    .functionalities {
        display: grid;
        place-items: center;
        column-gap: 4rem;
        row-gap: 3rem;
        grid-template-columns: 1fr 1fr;
    }

    .functionality {
        width: 32vw;
        height: 15vw;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1rem;
        border-radius: 30px;

        transition: all 0.3s ease-in-out;
        border: 6px double var(--secondary-500);
    }

    .functionality:hover {
        color: var(--black);
        box-shadow: 1px 1px 10px var(--secondary-300);
        background-color: var(--secondary-500);
    }

    .functionality p {
        font-size: 1rem;
        line-height: 1.6rem;
        margin-bottom: 0;
    }

    .functionality:hover p {
        color: var(--black);
    }

    .functionality .icon {
        width: 10%;
        font-size: 3.8rem;
        line-height: 1.5rem;
    }

    .slider {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider img {
        width: 50%;
        margin-bottom: 2rem;
        box-shadow: 1px 1px 30px var(--black);
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
        width: 70%;
        border-color: var(--secondary-500);
        opacity: 0.5;
    }
`;

export default Project;
