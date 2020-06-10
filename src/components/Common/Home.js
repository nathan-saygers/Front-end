import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHome } from '../Styles/StyledHome';

const Home = () => {

    return (
        <StyledHome>
            <div className="title">
                <h3>Welcome to Making Gainz!</h3>
            </div>
            <div className="buttons-container">
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
            </div>
        </StyledHome>
    )
}
export default Home;