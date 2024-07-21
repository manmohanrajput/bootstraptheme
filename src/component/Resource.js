import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchResource } from '../services/actions';
import '../css/Reasource.css';

const Resource = () => {
  const dispatch = useDispatch();
  const resource = useSelector((state) => state.resource);

  useEffect(() => {
    dispatch(fetchResource());
  }, [dispatch]);

  if (!resource || !resource.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="resource-container">
      <h4>Resource</h4>
      <div className="resource-cards">
        {resource.map((item) => (
          <div key={item.id} className="image-card">
            <p>{item.name} {item.year}</p>
            <p>{item.color}</p>
            <p>{item.pantone_value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
