import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 0.6s linear infinite;
    margin: 5px auto;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`

export function Spinner({loading}) {
    return (
        <StyledSpinner />
    )
}