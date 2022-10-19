import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataContext } from "../../functions/Context";
import "../../styles/main.scss";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

function UserInfo() {
  const { userState, dispatchUserState } = useContext(dataContext);
  const navigate = useNavigate();

  const logOut = () => {
    dispatchUserState({ type: "IS_LOGOUT" });
    navigate("/");
  };
  return (
    <div>
      <Wrapper>
        <p>email: {userState.users[0].email}</p>
        <div className="button-container-user-info">
          <button
            className="btn btn-outline-dark button-styling-user-info btn-out"
            onClick={logOut}
          >
            Log Out
          </button>
          <button
            className="btn btn-outline-dark button-styling-user-info"
            onClick={() => navigate("/")}
          >
            Back to home
          </button>
          <button class="btn btn-outline-dark button-styling-user-info">
            Change password
          </button>
        </div>
      </Wrapper>
    </div>
  );
}

export default UserInfo;
