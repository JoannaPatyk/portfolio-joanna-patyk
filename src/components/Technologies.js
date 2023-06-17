import React from 'react';
import styled from 'styled-components';
import technologies from '../utils/technologies';
import technologyIcons from '../utils/technologyIcons';

function Technologies() {
    return (
        <Wrapper>
            <div className="technologies-container">
                <div className="technologies-title-container">
                    <h5>Technologies and libraries used in this the project</h5>
                    <div className="technologies-icon-container">
                        <div className="technologies-icon">
                            {technologyIcons.map(({ id, icon }) => (
                                <div key={id} className="technology-icon">
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="technologies">
                    {technologies.map(({ id, text }) => {
                        return <h3 key={id}>{text}</h3>;
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .technologies-container {
        width: 75%;
        min-height: 35vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    .technologies-title-container {
        border-right: 2px solid var(--primary-300);
    }

    .technologies-container h5 {
        text-align: right;
        padding-right: 1.5rem;
    }

    .technologies-icon {
        display: flex;
        column-gap: 1.2rem;
        justify-content: center;
    }

    .technology-icon {
        font-size: 2.5rem;
        transition: var(--transition);
    }

    .technology-icon:hover {
        transform: scale(1.2);
        color: var(--secondary-500);
    }

    .technologies {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 1.2rem;
        row-gap: 1.2rem;
    }

    .technologies h3 {
        place-self: center stretch;
        color: var(--primary-500);
        font-weight: 200;
        font-size: 1.3rem;
        letter-spacing: 4px;
        text-transform: uppercase;
        text-align: center;
        border: 2px solid var(--secondary-500);
        border-radius: var(--borderRadius);
        padding: 0.25rem 1rem;
        transition: var(--transition);
    }

    .technologies h3:hover {
        color: var(--black);
        background-color: var(--secondary-500);
    }

    @media (max-width: 1400px) {
        .technologies-container {
            flex-direction: column;
        }

        .technologies-container h5 {
            text-align: center;
            padding: 0;
        }

        .technologies-title-container {
            margin-bottom: 2rem;
            border-right: none;
            border-bottom: 2px solid var(--primary-300);
        }
    }

    @media (max-width: 1050px) {
        .technologies {
            width: 100%;
            column-gap: 0.8rem;
            row-gap: 0.8rem;
        }

        .technologies h3 {
            font-size: 1.1rem;
            padding: 0.2rem 0.9rem;
        }
    }

    @media (max-width: 695px) {
        .technologies-icon {
            column-gap: 0.6rem;
        }
    }

    @media (max-width: 530px) {
        .technology-icon {
            font-size: 2rem;
        }
    }

    @media (max-width: 485px) {
        .technology-icon {
            font-size: 1.8rem;
        }
    }
`;

export default Technologies;
