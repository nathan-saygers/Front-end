import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { register } from '../../actions/primaryActions'
import { useHistory } from 'react-router-dom';

import { StyledLogin } from '../Styles/StyledLogin';

const Register = props => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleChanges = event => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    console.log("new credentials from login component", newUser);
  };

  const createNewUser = event => {
    // event.preventDefault();
    props.register(newUser)
    history.push('/login')
    setNewUser({ username: "", password: "", email: "" });
  };

  return (
    <StyledLogin>
      <form onSubmit={handleSubmit(createNewUser)}>
        <input
          type="username"
          name="username"
          placeholder="username"
          value={newUser.username}
          onChange={handleChanges}
          ref={register({required: "Name Required"})}
          />
        {errors.username && <p>{errors.username.message}</p>}
        <input
          type="password"
          name="password"
          placeholder="password"
          value={newUser.password}
          onChange={handleChanges}
          ref={register({required: "Password Required"})}
          />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="email"
          name="email"
          placeholder="email"
          value={newUser.email}
          onChange={handleChanges}
          ref={register({required: "Email Required"})}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <button>Register</button>
      </form>
    </StyledLogin>
  );
};

const mapStateToProps = state => {
    return {
      registerLoading: state.registerLoading,
    }
  }

export default connect (mapStateToProps, {register})(Register);
