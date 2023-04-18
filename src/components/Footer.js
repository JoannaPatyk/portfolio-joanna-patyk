import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Wrapper>
            <hr />
            <div>Copyright © 2023 Joanna Patyk | All Rights Reserved</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    div {
        height: 5vh;
        line-height: 5vh;
        text-align: center;
    }

    hr {
        width: 90vw;
        margin: 2rem auto 0;
        border-color: var(--secondary-500);
        opacity: 0.5;
    }
`;

export default Footer;
