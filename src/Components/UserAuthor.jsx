import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const UserAuthor = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <>
          <Login />
          <p>Don't have an account? <button onClick={toggleForm}>Signup</button></p>
        </>
      ) : (
        <>
          <Signup />
          <p>Already have an account? <button onClick={toggleForm}>Login</button></p>
        </>
      )}
    </div>
  );
};

export default UserAuthor;
