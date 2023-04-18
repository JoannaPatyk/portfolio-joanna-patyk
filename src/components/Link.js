import React from 'react';
import styled from 'styled-components';

function Link() {
    const link = 'https://household-expenses-tracker-frontend.onrender.com';
    return (
        <Wrapper>
            <div className="link-container">
                <h5>Link to the application.</h5>
                <div>
                    <p>Just click and see how application looks like...</p>
                    <a className="btn" href={link}>
                        Household Expenses Tracker
                    </a>
                </div>
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

    .link-container h5,
    a {
        margin: 0;
    }
`;

export default Link;
