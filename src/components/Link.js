import React from 'react';
import styled from 'styled-components';

function Link() {
    const link = 'https://household-expenses-tracker-frontend.onrender.com';
    return (
        <Wrapper>
            <div className="link-container">
                <h5>Link to the hosted application:</h5>
                <a className="btn" href={link}>
                    Household Expenses Tracker
                </a>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .link-container {
        margin-bottom: 2rem;
    }
    a {
        margin: 0;
    }
`;

export default Link;
