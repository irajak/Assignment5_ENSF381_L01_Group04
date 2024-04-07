import React, { useState } from 'react';

const SignupForm = ({ onSwitch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [generalError, setGeneralError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = {};
    let hasErrors = false;

    // Clear previous general error
    setGeneralError('');

    // Check for empty fields
    if (!username || !password || !confirmPassword || !email) {
      formErrors.general = 'All fields are required!';
      hasErrors = true;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      formErrors.passwordsMatch = 'Passwords do not match!';
      hasErrors = true;
    }

    // If there are errors, set the general error message
    if (hasErrors) {
      setGeneralError(formErrors.general || formErrors.passwordsMatch);
      return;
    }

    // If there are no errors, submit the form
    console.log('Signup Submitted', { username, password, email });
    // Handle the actual form submission logic here (e.g., API call)
  };

  return (
    <div>
      <h2>Signup</h2>
      {generalError && (
        <div style={{ color: 'red'}}>
          <div className="error">{generalError}</div>
          <div style={{ height: '1em' }}></div> 
        </div>
      )}
      <form onSubmit={handleSubmit}>

        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div>
        <button type="submit">Signup</button>
      </div>
      <div> 
        <button type="button" onClick={onSwitch}>Switch to Login</button>
      </div>
      </form>
    </div>
  );
};

export default SignupForm;
