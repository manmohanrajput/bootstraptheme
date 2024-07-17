// src/components/ImageList.js

import React from 'react';
import { useSelector } from 'react-redux';
import { FaCloudDownloadAlt } from "react-icons/fa";
import '../css/Image.css';

const ImageList = () => {
  const images = useSelector((state) => state.images);
  const category = useSelector((state) => state.category);

  const filteredImages = category === 'All'
    ? images
    : images.filter((image) => image.category === category);

  return (
    <div className="image-list">
      {filteredImages.map((image) => (
        <div key={image.id} className="card">
          <img src={image.src} alt={image.alt} className="card-img" />
          <div className="card-body">
          <p className="card-price">{image.text}</p>
            <p className="card-price"><FaCloudDownloadAlt />{image.download}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
