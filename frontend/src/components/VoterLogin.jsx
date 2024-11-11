import React from 'react';
// import './VoterLogin.css';


const VoterLogin = () => {
  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form action="" method="POST">
        <h3>Voter Login</h3>

        <label htmlFor="username">Voter id</label>
        <input type="text" placeholder="1022XXXX" id="username" name="voter" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" id="password" required />

        <button type="submit" name="login">Log In</button>

        <div className="forget">
          Don't remember? <a href="/" id="forget_id" style={{ color: 'black' }}>Forgot password</a>
        </div>
      </form>
    </div>
  );
};

export default VoterLogin;
