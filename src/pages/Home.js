import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '../assets/girl.png';

function Home() {
    return (
        <Wrapper>
            <div className="main-container">
                <div className="description">
                    <h1>Joanna Patyk</h1>
                    <h4>Junior Frontend Developer</h4>
                    <h2>Hi, my name is Joanna!</h2>
                    <div>
                        <p>
                            I am learning to be a front-end developer. I discovered my passion for front-end development
                            in February 2022, and I have been dedicated to expanding my knowledge and skillset.
                        </p>
                        <p>
                            My favorite library to work with is React, and I am liked about the potential it offers for
                            building interactive and dynamic user interfaces. I am always looking for new challenges and
                            opportunities to develop.
                        </p>
                    </div>
                    <Link className="btn" to="/projects">
                        see more
                    </Link>
                </div>

                <img src={image} alt="" />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .main-container {
        position: relative;
        display: flex;
        height: 90vh;
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 55%;
    }

    h1 {
        font-weight: 100;
        font-size: 6rem;
        color: var(--primary-500);
        font-family: var(--titleFont);
    }

    h2,
    p {
        font-weight: 400;
        color: var(--primary-500);
        letter-spacing: var(--smallLetterSpacing);
        line-height: 2rem;
        text-align: justify;
        margin: 1rem 0;
    }

    h2 {
        font-weight: 600;
    }

    p {
        font-size: 1.1rem;
    }

    h4 {
        font-weight: 400;
        font-size: 1.8rem;
        color: var(--secondary-500);
        text-transform: uppercase;
        letter-spacing: var(--letterSpacing);
        border-bottom: 4px double var(--secondary-500);
        text-shadow: 1px 1px 5px var(--secondary-300);
        margin-bottom: 3rem;
        padding-bottom: 1rem;
    }

    img {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 95%;
    }
`;

export default Home;
