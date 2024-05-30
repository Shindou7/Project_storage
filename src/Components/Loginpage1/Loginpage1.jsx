import React, { useState } from 'react';
import "./Loginpage1.css"

const Loginpage1 = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggleMode = () => {
    setIsRegistering(prevState => !prevState);
  };

  return (
    <div className='login-container0'>
    <div className="login-container">
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        {isRegistering && (
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />
          </div>
        )}

        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>

      <p onClick={handleToggleMode}>
        {isRegistering ? 'Already have an account? Login here.' : 'Don\'t have an account? Register here.'}
      </p>
    </div>
    </div>
  );
};

export default Loginpage1;
