import styled from 'styled-components';

export const StyledJournalForm = styled.div`
    
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        color: #007343;
    }
    form {
        background: #555555;
        padding: 20px 0;
        width: 50%;
        border-radius: .5rem;
        box-shadow: 5px 5px grey;
        min-width: 530px;

        @media(max-width: 600px) {
            min-width: 300px;
        }

        label {
            font-size: 1.8rem;
            margin-right: 5px;
            color: #FAFAFA;
        }
        input {
            padding: 5px;
            font-size: inherit;
            border-radius: 4px;
        }
        button {
            font-size: .8rem;
            margin: .5rem;
            width: 100px;
            padding: .2rem .25rem;
            border-radius: .5rem;
            border: solid #00A35E 2px;
            background: #FFFFFF;
            color: #00A35E;

        &:hover {
            color: #FFFFFF;
            background: #00A35E;
        }
    }
`;