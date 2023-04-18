import React from 'react';
import styled from 'styled-components';
import contact from '../utils/contact';
import bg from '../assets/lights.png';

function Contact() {
    return (
        <Wrapper>
            <div className="contact-container">
                <h2>Contact details</h2>
                <div className="contact-details">
                    {contact.map(({ id, icon, text }) => (
                        <div key={id} className="contact-item">
                            <span>{icon}</span>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
                <img src={bg} alt="" />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .contact-container {
        position: relative;
        width: 100%;
        height: 90vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 6rem;
        overflow: hidden;
    }

    .contact-details {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h2 {
        padding: 2rem 0;
        font-size: 3.5rem;
        font-weight: 400;
        text-transform: uppercase;
        font-family: var(--titleFont);
        background: linear-gradient(to right, #ff00cc, #2fb2b7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: var(--smallLetterSpacing);
    }

    .contact-item {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .contact-item p {
        font-size: 1.5rem;
        font-weight: 200;
        padding: 2rem;
    }

    span {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        border: 2px solid var(--secondary-500);
        box-shadow: 1px 1px 2px var(--secondary-300);
        border-radius: 50%;
        transition: var(--transition);
    }

    span:hover {
        color: var(--black);
        background-color: var(--secondary-500);
    }

    img {
        position: absolute;
        bottom: -10%;
        right: 0;
        height: 150%;
        opacity: 0.3;
        z-index: -100;
    }
`;

export default Contact;
