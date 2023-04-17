import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PulsatingText from '../components/PulsatingText';
import woman from '../assets/girl.png';
import bg from '../assets/lights.png';

function Home() {
    return (
        <Wrapper>
            <div className="main-container">
                <img src={bg} alt="" className="bg-img" />
                <div className="description-container">
                    <div className="description-text">
                        <h1>Joanna Patyk</h1>
                        <h4>Junior Frontend Developer</h4>
                        <PulsatingText text="Hi, my name is Joanna!" />
                        <div>
                            <p>
                                I am learning to be a front-end developer. I discovered my passion for front-end
                                development in February 2022, and I have been dedicated to expanding my knowledge and
                                skill set.
                            </p>
                            <p>
                                My favorite library to work with is React, and I am liked about the potential it offers
                                for building interactive and dynamic user interfaces. I am always looking for new
                                challenges and opportunities to develop.
                            </p>
                        </div>
                        <Link className="btn" to="/contact">
                            contact
                        </Link>
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
        height: 160%;
        position: absolute;
        top: -28%;
        left: -10%;
        z-index: -100;
        transform: rotate(-10deg);
        opacity: 0.4;
    }

    .description-container {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -2rem;
    }

    .description-text {
        max-width: 55%;
    }

    .description-text h1 {
        font-weight: 100;
        font-size: 6rem;
        font-family: var(--titleFont);
    }

    .description-text h2,
    .description-text p {
        font-weight: 400;
        line-height: 2rem;
        text-align: justify;
        letter-spacing: var(--smallLetterSpacing);
        margin: 2.2rem 0;
    }

    .description-text h2 {
        font-weight: 600;
    }

    .description-text p {
        font-size: 1.2rem;
    }

    h4 {
        margin-bottom: 3rem;
        padding-bottom: 1rem;
        font-weight: 400;
        font-size: 1.8rem;
        color: var(--secondary-500);
        text-transform: uppercase;
        letter-spacing: var(--letterSpacing);
        text-shadow: 1px 1px 5px var(--secondary-300);
    }

    .woman-img {
        position: absolute;
        bottom: 0;
        right: 5%;
        height: 90%;
    }
`;

export default Home;
