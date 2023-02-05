import React from 'react';
import styled from 'styled-components';

const Spinner = () => <SpinnerContainer />;

export default Spinner;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: auto;
  border: 3px solid white;
  /* border: 3px solid rgba(195, 195, 195, 0.6); */
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
