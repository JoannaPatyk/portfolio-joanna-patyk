import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PulsatingAnimation from './PulsatingAnimation';

function Link() {
    const link = 'https://household-expenses-tracker-frontend.onrender.com';
    return (
        <Wrapper>
            <div className="link-container">
                <h5>Link to the application.</h5>
                <p>Just click and see how application looks like...</p>
                <PulsatingAnimation>
                    <Button id="button">
                        <a href={link}>Household Expenses Tracker</a>
                    </Button>
                </PulsatingAnimation>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .link-container {
        height: 25vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h5,
    a {
        margin: 0;
    }

    a {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--primary-300);
    }

    #button {
        margin: 0;
        background-color: transparent;
    }
`;

export default Link;
