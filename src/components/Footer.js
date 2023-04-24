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

    @media (max-width: 420px) {
        .footer-content {
            font-size: 0.8rem;
        }
    }
`;

export default Footer;
