import styled from 'styled-components';

export const StyledSpinner = styled.div`
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #16d47b; /* Blue */
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 0.8s linear infinite;
    margin: 100px auto;

    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }

`;