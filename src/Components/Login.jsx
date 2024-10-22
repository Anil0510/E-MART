import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';


//import Home from './Home';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    
    
    
    if (email.length>0&& password.length>5) {
      setError('');
      
      console.log('Login successful');
      navigate('/Signup')
    } else {
      setError('pls enter valid email or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">E- mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
