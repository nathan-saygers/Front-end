import styled from 'styled-components';

export const StyledExerciseCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem;

    .exercise-details-container {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 120px;
        padding: 1.5rem;
    }

    .exercise-details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 30rem;
        border-bottom: dashed black 2px;
        padding: .25rem;

        p {
            font-size: 1.5rem;
        }
    }

    .buttons-container {
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        button {
            font-size: 1rem;
            margin: .5rem;
            padding: .5rem 1rem;
            border-radius: .5rem;
            border: solid #00A35E 2px;
            background: #FFFFFF;
            color: #00A35E;

            &:hover {
                color: #FFFFFF;
                background: #00A35E;
            }
        }
    }
`;