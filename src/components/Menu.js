import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import links from '../utils/links';

function Menu() {
    const navigate = useNavigate();

    function handleClick(path) {
        navigate(path);
    }

    return (
        <Wrapper>
            <nav className="menu">
                {links.map(({ id, text, path }) => {
                    return (
                        <div
                            className="menu-element"
                            role="button"
                            tabIndex={0}
                            key={id}
                            onClick={() => handleClick(path)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    handleClick(path);
                                }
                            }}
                            onKeyUp={(event) => {
                                if (event.key === 'Escape') {
                                    event.target.blur();
                                }
                            }}
                        >
                            {text}
                        </div>
                    );
                })}
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
    .menu {
        height: 10vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 3rem;
    }

    .menu-element {
        padding: 1.5rem;
        font-size: 1.7rem;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--secondary-200);
        letter-spacing: var(--letterSpacing);
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        color: var(--secondary-500);
        transform: scale(0.95);
        border-bottom-color: var(--secondary-500);
    }
`;

export default Menu;
