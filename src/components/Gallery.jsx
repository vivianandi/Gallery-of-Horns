import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json'; // Import JSON data

function Gallery() {
  return (
    <div>
      {data.map((beast) => (
        <HornedBeast
          key={beast._id}
          title={beast.title}
          imageUrl={beast.image_url} // Pass imageUrl prop
          description={beast.description}
        />
      ))}
    </div>
  );
}

export default Gallery;
