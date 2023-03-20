import React, { useState } from 'react';
import "./LoginForm.css";
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [error,setError]=useState(' ');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform authentication logic here
    if (username === 'admin' && password === 'password') {
      navigate('/dashboard');

    }
    else{
        setError('Invalid username or password')

    }
  };

 

  return (
    <div className='login-form-container'>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form  className = "login-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm; 