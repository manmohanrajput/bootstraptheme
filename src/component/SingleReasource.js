
import React, { useEffect } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { fetchSingleReasource } from '../services/actions';
import '../css/Reasource.css';


const SingleResource = ({ resourceId }) => {
  const dispatch = useDispatch();
  const singleResource = useSelector((state) => state.singleResource);

  useEffect(() => {
    dispatch(fetchSingleReasource(resourceId ));
  }, [dispatch,resourceId ]);

  if (!singleResource) {
    return <div>Loading...</div>;
  }

  return (
    <div className="resource-container">
      <h4>Single Resource</h4>
      <div className="resource-cards">
        <div key={singleResource.id} className="image-card">
          <p>{singleResource.name} {singleResource.year}</p>
          <p>{singleResource.color}</p>
          <p>{singleResource.pantone_value}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleResource;
