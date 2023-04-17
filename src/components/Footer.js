import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Wrapper>
            <div>Copyright © 2023 Joanna Patyk | All Rights Reserved</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    div {
        text-align: center;
    }
`;

export default Footer;
