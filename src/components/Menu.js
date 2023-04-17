import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import links from '../utils/links';

function Menu() {
    return (
        <Wrapper>
            <nav className="menu">
                {links.map(({ id, text, path }) => {
                    return (
                        <Link className="menu-element" to={path} key={id}>
                            {text}
                        </Link>
                    );
                })}
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
    .menu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 10vh;
        width: 100%;
        padding: 1rem;
    }

    .menu-element {
        padding: 1rem;
        text-decoration: none;
        text-transform: uppercase;

        font-size: 1.5rem;
        color: var(--secondary-200);
        letter-spacing: var(--letterSpacing);
        border-bottom: 4px double transparent;
        transition: var(--transition);
    }

    .menu-element:hover {
        color: var(--secondary-500);
        transform: scale(0.97);
        border-bottom-color: var(--secondary-500);
        text-shadow: 1px 1px 5px var(--secondary-500);
    }
`;

export default Menu;
