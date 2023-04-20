
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
  const [err, setErr] = useState(null);

  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
    try {      
      const res = await axios.post("http://localhost:3600/api/user/login",  { username, password});
      console.log(res.data)
      localStorage.setItem("token", JSON.stringify(res.data.accessToken));
      navigate("/home")
    } catch (err) {
      setErr(err.response.data?.message);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="UserName"
              name="username"
              onChange={(e)=>setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
