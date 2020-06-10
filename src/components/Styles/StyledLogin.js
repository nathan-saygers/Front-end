import styled from 'styled-components';

export const StyledLogin = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    form {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        height: 300px;
        box-shadow: 10px 10px 5px grey;
        width: 300px;
        background: #FAFAFA;
        padding: 20px;

        @media(max-width: 500px) {
            width: 60%;
        }

        p {
            color: #9A0A0A;
            font-size: 1rem;
            
        }

        input {
            width: 80%;
            height: 30px;
            font-size: inherit;
            margin: 10px 0;
            border: solid #67E6A1 2px;
            border-radius: 4px;
            outline: none;

            &:focus {
                border: 2px solid #00A35E;
            }

        }
        button {
            font-size: 1rem;
            width: 100px;
            padding: .5rem 1rem;
            border-radius: .5rem;
            border: solid #00A35E 2px;
            background: #FFFFFF;
            color: #00A35E;
            margin-top: 10px;

        &:hover {
            color: #FFFFFF;
            background: #00A35E;
    }
`;