import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleUser } from '../services/actions';
import '../css/SingleUser.css'; 

const SingleUser = ({ userId }) => {
  const dispatch = useDispatch();
  const singleUser = useSelector((state) => state.singleUser);

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
  }, [dispatch, userId]);

  if (!singleUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-user-card">
      <h3 className='singleuser'>Single user</h3>
      <div className="image-card">
      <img src={singleUser.avatar} alt={`${singleUser.first_name} ${singleUser.last_name}`} />
      <p>{singleUser.first_name} {singleUser.last_name}</p>
      <p>{singleUser.email}</p>
      </div>
      
    </div>
  );
};

export default SingleUser;
