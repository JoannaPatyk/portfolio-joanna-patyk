import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PulsatingAnimation from './PulsatingAnimation';

function Link() {
    const link = 'https://household-expenses-tracker-frontend.onrender.com';
    return (
        <Wrapper>
            <div className="link-container">
                <h5>Link to the application</h5>
                <p>Just click and see how application looks like:</p>
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
        height: 22 vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .link-container h5 {
        margin: 2rem 0 0 0;
    }

    a {
        margin: 0 auto;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--primary-300);
    }

    #button {
        margin: 0 auto;
        background-color: transparent;
    }

    @media (max-width: 685px) {
        .link-container p {
            margin-bottom: 0;
        }

        a {
            font-size: 1rem;
        }

        #button {
            margin: 0;
            width: 100%;
            letter-spacing: 2px;
        }
    }
`;

export default Link;
