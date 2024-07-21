
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../services/actions';
import '../css/CreateUser.css'; 

const CreateUser = () => {
  const dispatch = useDispatch();
  const createdUser = useSelector((state) => state.createdUser);
  const error = useSelector((state) => state.error);

  const [userData, setUserData] = useState({
    name: '',
    job: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
  };

  return (
    <div className="container1 mt-4">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder='Name'
            className="input"
            required
          />
      
          <input
            type="text"
            name="job"
            value={userData.job}
            onChange={handleChange}
            placeholder='Job'
            className="input"
            required
          />
        
        <button type="submit" className="button">Create User</button>
      </form>

      {createdUser && (
        <div className="user-details">
          <h3>User Created</h3>
          <p>ID: {createdUser.id}</p>
          <p>Name: {createdUser.name}</p>
          <p>Job: {createdUser.job}</p>
        </div>
      )}

      {error && <p className="error-message">Error: {error}</p>}
    </div>
  );
};

export default CreateUser;
