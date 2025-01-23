import React from 'react';

const Background_change = ({ image }) => {
  return (
    <div className="image-container">
      {image && (
        <img
          src={image}
          alt="Random"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </div>
  );
};

export default Background_change;