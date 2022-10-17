import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  margin: 3rem;
  max-width: 900px;
`;
const Header = styled.h2`
  margin: 2rem;
`;
function Registration() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    passwordTwo: "",
    accept: false,
    newsletter: false,
  });
  const handleChange = (event) => {
    event.preventDefault();
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <Wrapper>
      <Header>Register</Header>
      <form>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            onChange={handleChange}
            type="email"
            class="form-control"
            name="email"
            value={userInfo.email}
          />
          <div class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            onChange={handleChange}
            type="password"
            class="form-control"
            name="password"
            value={userInfo.password}
          />
        </div>
        <div class="mb-3">
          <label class="form-label"> Re-enter password</label>
          <input
            onChange={handleChange}
            type="password"
            class="form-control"
            name="passwordTwo"
            value={userInfo.passwordTwo}
          />
        </div>
        <div class="mb-3 form-check">
          <input
            onChange={handleChange}
            type="checkbox"
            class="form-check-input"
            name="accept"
            value={userInfo.accept}
          />
          <label class="form-check-label">Accept terms and conditions</label>
        </div>
        <div class="mb-3 form-check">
          <input
            onChange={handleChange}
            type="checkbox"
            class="form-check-input"
            name="newsletter"
            value={userInfo.newsletter}
          />
          <label class="form-check-label">Register for newsletter</label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Registration;
