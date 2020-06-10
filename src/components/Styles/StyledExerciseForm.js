import styled from 'styled-components';

export const StyledExerciseForm = styled.div`
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
        
        div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            label {
                font-size: 1.8rem;
                color: #FAFAFA;
                padding: 5px;
            }
            input {
                padding: 5px;
                font-size: inherit;
                width: 80%;
                border-radius: 4px;
            }
        }
        button {
            font-size: .8rem;
            margin: .5rem;
            width: 100px;
            padding: .4rem .75rem;
            border-radius: .5rem;
            border: solid #00A35E 2px;
            background: #FFFFFF;
            color: #00A35E;
            font-size: 1.5rem;

        &:hover {
            color: #FFFFFF;
            background: #00A35E;
        }
    }
`;