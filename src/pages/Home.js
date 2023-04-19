import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import woman from '../assets/girl.png';
import bg from '../assets/lights.png';
import PulsatingAnimation from '../components/PulsatingAnimation';

function Home() {
    return (
        <Wrapper>
            <div className="main-container">
                <img src={bg} alt="" className="bg-img" />
                <div className="description-container">
                    <div className="description-text">
                        <h1>Joanna Patyk</h1>
                        <h4>Junior Frontend Developer</h4>
                        <h2>Hi, my name is Joanna...</h2>
                        <div>
                            <p>
                                I'm currently learning how to become a front-end developer. I discovered my passion for
                                front-end development in February 2022, and I have been dedicating to expanding my
                                knowledge and skill set.
                            </p>
                            <p>
                                My favorite library to work with is <span>React</span>. I am liked about the potential
                                it offers for building interactive and dynamic user interfaces. I am always looking for
                                new challenges and opportunities to develop.
                            </p>
                        </div>
                        <PulsatingAnimation>
                            <Link className="btn" to="/contact">
                                contact
                            </Link>
                        </PulsatingAnimation>
                    </div>
                    <img src={woman} alt="" className="woman-img" />
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .main-container {
        height: 90vh;
        position: relative;
        display: flex;
        margin: 0 auto;
        overflow: hidden;
    }

    .bg-img {
        height: 180%;
        position: absolute;
        top: -45%;
        left: -15%;
        z-index: -100;
        transform: rotate(-10deg);
        opacity: 0.4;
    }

    .description-container {
        width: 80%;
        margin-top: -2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .description-text {
        max-width: 58%;
    }

    .description-text h1 {
        margin-top: -4rem;
        font-weight: 100;
        font-size: 6.5rem;
        font-family: var(--titleFont);
        background: linear-gradient(to right, var(--primary-500), var(--violet));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .description-text h2,
    .description-text p {
        font-weight: 300;
        line-height: 2.3rem;
        text-align: justify;
        letter-spacing: var(--smallLetterSpacing);
        margin: 1.2rem 0;
    }

    .description-text h2 {
        font-weight: 600;
    }

    .description-text p {
        font-size: 1.2rem;
    }

    span {
        font-weight: 600;
    }

    h4 {
        margin-bottom: 3rem;
        padding-bottom: 1rem;
        font-weight: 400;
        font-size: 1.8rem;
        color: var(--secondary-500);
        text-transform: uppercase;
        letter-spacing: var(--letterSpacing);
        text-shadow: 1px 1px 3px var(--secondary-200);
    }

    .woman-img {
        position: absolute;
        bottom: 0;
        right: 5%;
        height: 100%;
    }
`;

export default Home;
