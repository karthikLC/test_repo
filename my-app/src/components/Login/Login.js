import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.module.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Login() {
  let navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [formUserNameValidity, setUserNameValidity] = useState({
    error: false,
    helperText: ''
  });
  const [formPasswordValidity, setPasswordValidity] = useState({
    error: false,
    helperText: ''
  });
  const IsEmpty = (value) => (value === '')
  const login = () => {
    setUserNameValidity ({
      error: IsEmpty(usernameRef.current.value),
      helperText: IsEmpty(usernameRef.current.value) ? "Invalid Username." : ""
    })
    setPasswordValidity({
      error: IsEmpty(passwordRef.current.value),
      helperText: IsEmpty(passwordRef.current.value) ? "Invalid Password." : ""
    })
    if(IsEmpty(usernameRef.current.value) || IsEmpty(passwordRef.current.value))
      return false;

    axios.post(process.env.REACT_APP_API_URL+'authenticateUser/',
    {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    })
    .then(response =>{
        console.log("Success !!")
        navigate('/dashboard');
    })
    .catch(error => {
      console.log("Failure !!")
      navigate('/dashboard');

    });    
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField 
          {...formUserNameValidity}
          id="userName" 
          fullWidth 
          label="Username" 
          variant="standard" 
          inputRef={usernameRef}
        />
      </div>
      <div>
        <TextField 
          {...formPasswordValidity}
          id="password" 
          fullWidth 
          label="Password" 
          type="password" 
          variant="standard" 
          inputRef={passwordRef}
        />
      </div>  
      <div>
        <Button 
          variant="contained"
          onClick={login}
          >Login</Button>
      </div>
    </Box>
  );
}