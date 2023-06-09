import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import links from '../utils/links';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import Button from './Button';

function Menu() {
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const handleChangePage = (path) => {
        navigate(path);
    };

    const handleButtonUp = () => {
        window.scrollTo({
            top: menuRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const halfWindowHeight = windowHeight / 2;

            if (position > halfWindowHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Wrapper>
            <nav className="menu" ref={menuRef}>
                {links.map(({ id, text, path }) => {
                    return (
                        <div
                            className="menu-element"
                            role="button"
                            tabIndex={0}
                            key={id}
                            onClick={() => handleChangePage(path)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    handleChangePage(path);
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
            {showButton && (
                <Button id="btn-up" onClick={handleButtonUp}>
                    <MdKeyboardDoubleArrowUp />
                </Button>
            )}
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
        background-color: transparent;
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

    #btn-up {
        position: fixed;
        top: 85%;
        right: 5%;
        z-index: 100;
        width: 45px;
        height: 45px;
        background-color: transparent;
    }

    #btn-up:hover {
        color: var(--black);
        background-color: var(--secondary-500);
    }

    @media (max-width: 795px) {
        .menu-element {
            letter-spacing: 0;
        }

        #btn-up {
            display: none;
        }
    }

    @media (max-width: 610px) {
        .menu-element {
            font-size: 1.4rem;
            padding: 1.5rem;
        }

        #btn-up {
            width: 40px;
            height: 40px;
        }
    }

    @media (max-width: 550px) {
        .menu {
            justify-content: center;
            padding-right: 0;
        }

        .menu-element {
            font-size: 1.2rem;
            padding: 1rem;
        }

        #btn-up {
            width: 35px;
            height: 35px;
        }
    }
`;

export default Menu;
