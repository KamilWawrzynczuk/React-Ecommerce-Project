import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3rem;
  max-width: 900px;
`;
const Header = styled.h2`
  margin: 2rem;
`;
function Login() {
  const [loggedIn, logIn] = useState(false);

  return (
    <Wrapper>
      <Header>Login</Header>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
    </Wrapper>
  );
}

export default Login;
