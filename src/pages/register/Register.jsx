import * as React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//import "./register.scss";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// export default function BasicTextFields() {
//   return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
     
    </Box>
//   );
// }

const Register = () => {
    const navigate = useNavigate()
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState("")
    const [name, setName] = useState("")
    const [err, setErr] = useState(null);


  const handleClick = async (e) => {
    e.preventDefault();
    console.log(username, email)
    try {
      await axios.post("http://localhost:3600/api/user/register", {username, email, password, phone, address, name});
      navigate("/home")
    } catch (err) {
      setErr(err.response.data?.message);
    }
  };

  return (
    <div className="register">     
      <div className="card">
        <div className="left">
          <h1>Welcome</h1>


          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
          <TextField id="outlined-basic" label="username" variant="outlined"
                  type="text"
                  placeholder="username"
                  name="username"
                  onChange={(e)=>setUserName(e.target.value)}  />
     
          </Box>
         
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}

            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}

            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={(e)=>setPhone(e.target.value)}

            />

            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={(e)=>setAddress(e.target.value)}

            />

            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e)=>setName(e.target.value)}
            />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;