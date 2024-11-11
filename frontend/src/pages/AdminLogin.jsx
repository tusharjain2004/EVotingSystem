import React from "react";
import './AdminLogin.css';

const AdminLogin = () => {
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Admin Login</h3>

        <label htmlFor="username">Admin Username</label>
        <input
          type="text"
          placeholder="1022XXXX"
          id="username"
          name="voter"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          required
        />

        <button type="submit" name="login">
          Log In
        </button>

        <div className="forget">
          Don't remember ?{" "}
          <a href="" id="forget_id" style={{ color: "black" }}>
            {" "}
            Forgot password
          </a>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
