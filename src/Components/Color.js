import React from 'react';

const Color = ({ color }) => {
  return (
    <div
      className="color-container"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Color;