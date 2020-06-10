import styled from 'styled-components';

export const StyledJournalCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .workout {
        width: 45%;
        border-bottom: dashed 2px black;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        a {
            text-decoration: none;

            h4 {
                color: #007343;

                @media(max-width: 500px) {
                    font-size: 2rem;
                }
            }
        }
        
        p {
            color: #00A35E;
            font-size: 1.2rem;
        }
    }

    .buttons-container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    button {
        margin-bottom: 10px;
        font-size: 1rem;
        width: 100px;
        padding: .25rem .5rem;
        border-radius: .5rem;
        border: solid #00A35E 2px;
        background: #FFFFFF;
        color: #00A35E;

        @media(max-width: 500px) {
            width: 60px;
            margin: 0 0 5px 10px;
        }

        &:hover {
            color: #FFFFFF;
            background: #00A35E;
    }
`;