import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import "../css/Login.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onLogin === 'function') {
      onLogin(formData.username);
      history.push('/');
    } else {
      console.error('onLogin is not a function');
    }
  };

  const responseGoogle = (credentialResponse) => {
    const userObject = JSON.parse(atob(credentialResponse.credential.split('.')[1]));
    onLogin(userObject.name);
    history.push('/');
  };

  return (
    <GoogleOAuthProvider clientId="725311537234-d7h0elj4fc8dure878g66a5b6bcbhvc3.apps.googleusercontent.com">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
          <h3 style={{color:'#000',textAlign:'center'}}>User Login</h3>
            <input
              type="text"
              id="username"
              name="username"
              placeholder='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="google-login">
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={() => {
              console.error('Login Failed');
            }}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
