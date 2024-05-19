import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = () => {
  const navigate = useNavigate(); // Use useNavigate inside the functional component

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      alert('Login successful!');
      navigate("/dash");
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div>
      <style>
        {`
          /* Paste your CSS code here */
          * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }
          body {
            margin: 0;
            padding: 0;
            font-family: "Poppins", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: url('logimg1.jpg') no-repeat center center fixed;
            background-size: cover;
          }
          
          .wrapper {
            width: 420px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(9px);
            color: #fff;
            border-radius: 12px;
            padding: 30px 40px;
          }
          
          .wrapper h1 {
            font-size: 36px;
            text-align: center;
          }
          
          .wrapper .input-box {
            position: relative;
            width: 100%;
            height: 50px;
            margin: 30px 0;
          }
          
          .input-box input {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            outline: none;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 40px;
            font-size: 16px;
            color: #fff;
            padding: 20px 45px 20px 20px;
          }
          
          .input-box input::placeholder {
            color: #ffffff;
          }
          
          .input-box i {
            position: absolute;
            right: 20px;
            top: 30%;
            transform: translate(-50%);
            font-size: 20px;
          }
          
          .wrapper .remember-forgot {
            display: flex;
            justify-content: space-between;
            font-size: 14.5px;
            margin: -15px 0 15px;
          }
          
          .remember-forgot label input {
            accent-color: #fff;
            margin-right: 3px;
          }
          
          .remember-forgot a {
            color: #fff;
            text-decoration: none;
          }
          
          .remember-forgot a:hover {
            text-decoration: underline;
          }
          
          .wrapper .btn {
            width: 100%;
            height: 45px;
            background: #fff;
            border: none;
            outline: none;
            border-radius: 40px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            font-size: 16px;
            color: #333;
            font-weight: 600;
          }
          
          .wrapper .register-link {
            font-size: 14.5px;
            text-align: center;
            margin: 20px 0 15px;
          }
          
          .register-link p a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
          }
          
          .register-link p a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      
      <div className="wrapper">
        <form onSubmit={validateForm}>
          <h1>Login</h1>
          <div className="input-box">
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Username" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <Link to="/signup">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;