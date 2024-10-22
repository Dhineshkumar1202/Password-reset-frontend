// ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ResetPassword = () => {
  const { token } = useParams(); // Assuming token is passed in the URL
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/reset-password/${token}`, { newPassword });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message || 'Something went wrong!');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Reset Password</h2>
      <form onSubmit={handleResetPassword} className="form">
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="button">
          Reset Password
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ResetPassword;
