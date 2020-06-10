import styled from 'styled-components';

export const StyledNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #67E6A1;

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;

        img {
            height: 60px;
        }

    }
    .link-container {
        display: flex;
        justify-content: flex-end;
        width: 60%;
        
        @media(max-width: 370px) {
            flex-direction: column;
        }
        a {
            text-decoration: none;
            color: #161D18;
            padding: 0 10px;
            color: #161D18

            p {
                font-size: 1.5rem;

                @media(max-width: 650px) {
                    font-size: 1rem;
                }
            }
        }
        
    }
    @media(max-width: 500px) {
        flex-direction: column;
        height: 100px;
        justify-content: space-around;

        .logo-container {
            width: 100%;
        }
        .link-container {
            width: 100%;
            justify-content: center;

            a {
                p {
                    font-size: 1.2rem;
                }
            }
        }
    }
    @media(max-width: 370px) {
        height: 150px;
    }

`;