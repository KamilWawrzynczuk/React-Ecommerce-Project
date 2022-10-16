import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';

export default function StateTextFields() {


  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-first-name"
        label="First Name"
        value={name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-last-Name"
        label="Last Name"
        defaultValue="foo"
      />
            <TextField
        id="outlined-email"
        label="Email"
        defaultValue="foo"
      />
      {/* <TsAndCsWrapper> */}
      <Checkbox  />
      <p>Agree to terms & conditions</p>
      {/* </TsAndCsWrapper> */}
      <p>By giving us your email address we promise to always send annoying emails every day. By agreeing to out terms & conditions you agree to transfer ownership of your soul to us.</p>
    </Box>
  );
}
