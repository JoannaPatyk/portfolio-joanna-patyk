import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const PulsatingAnimation = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

const pulsate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
`;

const Wrapper = styled.p`
    animation: ${pulsate} 2s ease-in-out infinite;
`;

PulsatingAnimation.propTypes = {
    children: PropTypes.string
};

export default PulsatingAnimation;
