import React from 'react';
import styled from 'styled-components';
import contact from '../utils/contact';

function Contact() {
    return (
        <Wrapper>
            <h2>Contact</h2>
            {contact.map(({ id, text }) => (
                <p key={id}>{text}</p>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    h2 {
        font-weight: 400;
        color: var(--primary-500);
        letter-spacing: var(--smallLetterSpacing);
        text-transform: uppercase;
    }

    p {
        color: var(--primary-500);
    }
`;

export default Contact;
