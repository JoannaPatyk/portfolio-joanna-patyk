import React from 'react';
import styled from 'styled-components';
import functionality from '../utils/functionality';
import AnimatedElement from './AnimatedElement';

function Functionalities() {
    return (
        <Wrapper>
            <div className="functionalities-container">
                <h5>What can you find in the application?</h5>
                <div className="functionalities">
                    {functionality.map(({ id, text, icon }) => {
                        return (
                            <AnimatedElement key={id}>
                                <div className="functionality">
                                    <p className="icon">{icon}</p>
                                    <p>{text}</p>
                                </div>
                            </AnimatedElement>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .functionalities-container {
        width: 100%;
        height: 120vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .functionalities {
        display: grid;
        place-items: center;
        column-gap: 5rem;
        row-gap: 5rem;
        grid-template-columns: 1fr 1fr;
    }

    .functionality {
        position: relative;
        width: 30vw;
        height: 14vw;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1rem;
        border-radius: 30px;
        transition: all 0.6s ease-in-out;
        border: 6px double var(--secondary-500);
        overflow: hidden;
    }

    .functionality:hover {
        color: var(--black);
        box-shadow: 1px 1px 10px var(--secondary-300);
        background-color: var(--secondary-500);
    }

    .functionality p {
        font-size: 1.05rem;
        font-weight: 400;
        line-height: 1.6rem;
        margin-bottom: 0;
        color: var(--primary-200);
    }

    .functionality:hover p {
        color: var(--black);
    }

    .functionality .icon {
        position: absolute;
        top: -5%;
        left: -5%;
        width: 10%;
        font-size: 8rem;
        line-height: 1.5rem;
        opacity: 0.2;
    }
`;

export default Functionalities;
