import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataContext } from "../../functions/Context";

const Wrapper = styled.div`
  color: red;
`;

function UserInfo() {
  const { userState, dispatchUserState } = useContext(dataContext);
  const navigate = useNavigate();

  const logOut = () => {
    dispatchUserState({ type: "IS_LOGOUT" });
    navigate("/");
    console.log("from logout function");
  };
  console.log(userState);
  return (
    <div>
      <Wrapper>
        <p>oi</p>
        <button onClick={logOut}>log out</button>
      </Wrapper>
    </div>
  );
}

export default UserInfo;
