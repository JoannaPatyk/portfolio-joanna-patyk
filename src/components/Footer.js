import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Wrapper>
            <hr />
            <div className="footer-content">Copyright © 2023 Joanna Patyk | All Rights Reserved</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .footer-content {
        height: 5vh;
        line-height: 5vh;
        text-align: center;
    }

    hr {
        width: 80vw;
        margin: 2rem auto 0;
        opacity: 0.5;
        border-color: var(--secondary-500);
    }
`;

export default Footer;
