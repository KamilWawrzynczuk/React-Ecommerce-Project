import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";

export default function StateTextFields() {
  const TsAndCsWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const Wrapper = styled.div`
    text-align: center;
    padding: 2rem;
  `;
  // set user state
  const [user, setUserInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  // onChange function
  const handleChange = (evt) => {
    evt.preventDefault();
    setUserInfo({ ...user, [evt.target.name]: evt.target.value });
    console.log(user);
  };

  return (
    <Wrapper>
      <Box
        onChange={handleChange}
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* header or whatever we want to put here */}
        <h2>Give us ya email</h2>

        {/* input field */}
        <TextField
          id="outlined-first-name"
          label="First Name"
          name="firstName"
          value={user.firstName}
        />
        <TextField
          onChange={handleChange}
          id="outlined-last-Name"
          label="Last Name"
          defaultValue="last name"
          name="lastName"
          value={user.lastName}
        />
        <TextField
          id="outlined-email"
          label="Email"
          defaultValue="email"
          name="email"
          value={user.email}
        />

        {/* terms and conditions section */}
        <TsAndCsWrapper>
          <Checkbox />
          <p>Agree to terms & conditions</p>
        </TsAndCsWrapper>
        {/* fine print */}
        <p>
          By giving us your email address we promise to always send annoying
          emails every day. By agreeing to out terms & conditions you agree to
          transfer ownership of your soul to us.
        </p>
      </Box>
    </Wrapper>
  );
}
