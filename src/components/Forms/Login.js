import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from '../../actions/primaryActions';

import { StyledLogin } from '../Styles/StyledLogin';

const Login = props => {
  const { register, handleSubmit, errors } = useForm();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChanges = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const userLogin = event => {
    // event.preventDefault();
    props.login(credentials);
    setCredentials({ username: "", password: "" });
  };

  return (
    <StyledLogin>
      <form onSubmit={handleSubmit(userLogin)}>
        <input
          type="username"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChanges}
          ref={register({required: "Name Required"})}
        />
        {errors.username && <p>{errors.username.message}</p>}
        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChanges}
          ref={register({required: "Password Required"})}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button>Log in</button>
      </form>
    </StyledLogin>
  );
};

const mapStateToProps = state => {
  return {
    userID: state.userID,
    loginLoading: state.loginLoading,
  }
}

export default connect (mapStateToProps, {login})(Login);
