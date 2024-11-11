import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
import MainPage from './MainPage'

const Login = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/MainPage');
  }

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Voter Login</h3>

        <label htmlFor="username">Voter id</label>
        <input type="text" placeholder="1022XXXXX" id="username" name="voter" required/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password"  id="password" required/>

        <button onClick={handleClick} type="submit" name="login">Log In</button>
    
        <div className="forget">Don't remember ? <a href="" id="forget_id" style={{color:"black"}}> Forgot password</a></div>
      </form>
       
    </div>
    
  )
}

export default Login
