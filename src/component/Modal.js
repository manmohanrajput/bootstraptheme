import React from 'react';
// import '../css/Modal.css';

const Modal = ({ show, onClose, image, onAddToCart }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Add to Cart</h4>
        </div>
        <div className="modal-body">
          <img src={image.avatar} alt={`${image.first_name} ${image.last_name}`} className="modal-image" />
          <p>{image.first_name} {image.last_name}</p>
          <p>{image.email}</p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button">Close</button>
          <button onClick={() => onAddToCart(image)} className="button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
