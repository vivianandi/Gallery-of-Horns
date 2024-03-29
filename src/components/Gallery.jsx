import React from 'react';
import HornedBeast from './HornedBeast';

const Gallery = ({ beasts, handleShow }) => {
  return (
    <div className="gallery-container">
      {beasts.map((beast) => (
        <HornedBeast
          key={beast._id}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          handleClick={() => handleShow(beast)}
        />
      ))}
    </div>
  );
};

export default Gallery;