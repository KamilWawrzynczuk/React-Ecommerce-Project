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
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" />
          <div class="form-text"></div>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">
          Log in
        </button>
      </form>
    </Wrapper>
  );
}

export default Login;
