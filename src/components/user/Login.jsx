import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataContext } from "../../functions/Context";

const Wrapper = styled.div`
  margin: 3rem;
  max-width: 900px;
`;
const Header = styled.h2`
  margin: 2rem;
`;
function Login() {
  const { state, dispatch } = useContext(dataContext);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  function submitData(e) {
    e.preventDefault();
    for (let user of state.users) {
      if (
        user.email === userInfo.email &&
        user.password === userInfo.password
      ) {
        dispatch({ type: "IS_LOGIN", payload: userInfo });
        navigate("/home");
      }
    }
  }

  return (
    <Wrapper>
      <Header>Login</Header>
      <form onSubmit={submitData} onChange={handleChange}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input type="email" name="email" className="form-control" />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
      <Link to="/Registration">Not register yet? Click here.</Link>
    </Wrapper>
  );
}

export default Login;
