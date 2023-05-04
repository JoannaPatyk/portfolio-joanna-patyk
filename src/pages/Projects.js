import React from 'react';
import styled from 'styled-components';
import images from '../utils/images';
import Slider from '../components/Slider';
import Technologies from '../components/Technologies';
import Functionalities from '../components/Functionalities';
import Footer from '../components/Footer';
import Link from '../components/Link';
import { GiTakeMyMoney } from 'react-icons/gi';
import logo from '../assets/logo-dark.png';

function Project() {
    const link = 'https://github.com/JoannaPatyk?tab=repositories';
    return (
        <Wrapper>
            <hr />
            <div className="projects-container">
                <div className="main-information-container">
                    <h1>main project</h1>
                    <img className="logo" src={logo} alt="logo" />
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
                    <GiTakeMyMoney className="description-icon" />
                </div>
                <Functionalities />
                <Slider array={images} />
                <Link />
                <div className="other-container">
                    <h1>Other projects</h1>
                    <p>
                        Other projects that have been done by me can be found on my{' '}
                        <span>
                            <a className="github" href={link}>
                                github profile
                            </a>
                        </span>
                        .
                    </p>
                </div>
            </div>
            <Footer />
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
        padding: 2rem 0;
    }

    hr {
        margin: 0 auto;
    }

    h5,
    p {
        margin: 1rem;
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.9rem;
        text-align: center;
        color: var(--primary-200);
        letter-spacing: var(--smallLetterSpacing);
    }

    h5 {
        margin: 2rem 0;
        font-weight: 600;
        text-align: center;
        font-size: 1.8rem;
        line-height: 2.2rem;
        background: linear-gradient(to right, var(--primary-500), var(--secondary-500));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .main-information-container h5 {
        margin: 0;
    }

    h1 {
        padding: 2rem 0 0 0;
        font-size: 3.5rem;
        font-weight: 400;
        text-transform: uppercase;
        font-family: var(--titleFont);
        background: linear-gradient(to right, var(--primary-500), var(--secondary-500));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: var(--smallLetterSpacing);
    }

    .reason-container {
        width: 70%;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .description-container {
        position: relative;
        width: 70%;
        min-height: 58vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 4rem;
    }

    .description-container p {
        text-align: right;
    }

    span {
        font-weight: 600;
    }

    .description-icon {
        position: absolute;
        top: -10%;
        left: -15%;
        z-index: -100;
        transform: rotate(-15deg);
        font-size: 40rem;
        opacity: 0.15;
    }

    .btn {
        width: 35rem;
        margin-bottom: 2rem;
    }

    .slider-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .slider {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider img {
        width: 70%;
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

    .other-container {
        min-height: 20vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .other-container p {
        width: 100%;
        padding: 0 2rem;
    }

    .other-container h1 {
        font-size: 2.5rem;
    }

    .github {
        text-decoration: none;
        color: var(--primary-500);
    }

    @media (max-width: 1400px) {
        .description-container {
            min-height: 75vh;
            overflow: hidden;
        }

        .slider-container {
            min-height: 80vh;
        }
    }

    @media (max-width: 1050px) {
        h1 {
            font-size: 3.5rem;
        }

        h5 {
            font-size: 1.5rem;
        }

        .description-container {
            min-height: 85vh;
        }

        .slider-container {
            display: none;
        }
    }

    @media (max-width: 905px) {
        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 800px) {
        .description-container {
            min-height: 90vh;
            margin-left: 0;
        }
    }

    @media (max-width: 695px) {
        .logo {
            width: 80%;
        }

        .description-container {
            min-height: 130vh;
            width: 75%;
        }

        .description-icon {
            top: 0;
            font-size: 30rem;
        }

        .other-container h1 {
            font-size: 2rem;
        }
    }

    @media (max-width: 695px) {
        h1 {
            font-size: 2.8rem;
        }

        .description-container {
            min-height: 110vh;
        }
    }

    @media (max-width: 530px) {
        h1 {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 485px) {
        h1 {
            font-size: 2rem;
        }

        .reason-container p {
            width: 100%;
        }

        .description-container p {
            text-align: center;
        }

        .description-icon {
            top: 5%;
            font-size: 20rem;
        }
    }
`;

export default Project;
