import styled from 'styled-components';

export const StyledHome = styled.div`
    background-image: url('https://images.unsplash.com/photo-1544033527-b192daee1f5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80');
    height: 93vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    .title {
        background: white;
        opacity: 90%;
        width: 80%;
        margin-top: 100px;

        
    }
    .buttons-container {
        display: flex;
        align-items: center;
        justify-content: center;

        @media(max-width: 500px) {
            flex-direction: column;
        }

        button {
            width: 185px;
            font-size: 2rem;
            margin: 1rem;
            padding: 1rem 2rem;
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
            @media(max-width: 500px) {
                height: 88vh;

                .title {
                    margin-top: 50px;

                    h3 {
                        font-size: 3.5rem;
                    }
                }
            }
`;