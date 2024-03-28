import React from 'react';
import HornedBeast from './HornedBeast';

function Gallery() {
  return (
    <div>
      <HornedBeast
        title="Markhor"
        imageUrl="https://modernfarmer.com/wp-content/uploads/2014/08/saiga.jpg"
        description="Markhor."
      />

      <HornedBeast
        title="Addax"
        imageUrl="https://modernfarmer.com/wp-content/uploads/2014/08/28476658_9c97f35096_o.jpg"
        description="Addax"
      />
    </div>
  );
}

export default Gallery;