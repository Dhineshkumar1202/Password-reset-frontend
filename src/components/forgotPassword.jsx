import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the email as part of the request body
      const response = await axios.post('http://localhost:5000/api/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'Something went wrong!');
      } else {
        setMessage('Network error, please try again later.');
      }
    }
  };

  return (
    <div className="container">
      <h2 className="title">Forget Password</h2>
      <form onSubmit={handleEmailSubmit} className="form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="button">
          Send Reset Link
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgetPassword;
