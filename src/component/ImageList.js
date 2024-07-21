import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Image.css';

const ImageDisplay = () => {
  const category = useSelector((state) => state.category);
  const images = useSelector((state) => state.images);

  const filteredImages = images.filter((image) => {
    if (category === '') return true; 
    return image.category === category;
  });

  return (
    <div className="image-display-container">
      {filteredImages.length > 0 ? (
        filteredImages.map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.avatar} alt={`${image.first_name} ${image.last_name}`} />
            <p>{image.first_name} {image.last_name}</p>
            <p>{image.email}</p>
          </div>
        ))
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
};

export default ImageDisplay;
