
// src/Login.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice'; // Import the login action
import './Login.css';
function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Simulate a successful login
    const user = { username: 'exampleUser' };
    dispatch(login(user));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="col-lg-12 login-title">ADMIN PANEL</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form>
                <div className="form-group">
                  <label className="form-control-label">USERNAME</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control" />
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
                    {/* Error Message */}
                  </div>
                  <div className="col-lg-6 login-btm login-button">
                    <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>

    <button
      type="button"
      className="btn btn-outline-primary"
      onClick={handleLogin}
    >
      LOGIN
    </button>
      </div>
  );
}

export default Login;
