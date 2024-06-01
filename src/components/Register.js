// Register.js
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleRegister = e => {
    e.preventDefault();
    // Handle registration logic here (e.g., API calls, validation)
  };

  return (
    <div className="container register-form">
      <h2>Register</h2>
      <form id="register-form" onSubmit={handleRegister}>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <div className="login-link">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default Register;
