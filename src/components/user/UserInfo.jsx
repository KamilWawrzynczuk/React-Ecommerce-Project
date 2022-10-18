import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataContext } from "../../functions/Context";
import "../../styles/main.scss";

const Wrapper = styled.div`
  color: red;
  border: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <p>{userState.users[0].email}</p>
        <p>{userState.users[0].password}</p>
        <div className="button-container-user-info">
          <button onClick={logOut}>log out</button>
          <button
            className="button-styling-user-info"
            onClick={() => navigate("/")}
          >
            log out
          </button>
        </div>
      </Wrapper>
    </div>
  );
}

export default UserInfo;
