import React, { useState } from 'react';

function HornedBeast(props) {
  // State to track the number of favorites
  const [favorites, setFavorites] = useState(0);

  // Function to handle favorite click
  const handleFavoriteClick = () => {
    setFavorites(favorites + 1);
  };

  return (
    <div className="horned-beast">
      <h2>{props.title}</h2>
      <img
        src={props.imageUrl}
        alt={props.title}
        onClick={handleFavoriteClick} // Add click event handler to image
      />
      <p>{props.description}</p>

      {/* Display the number of favorites */}
      <div className="favorite-container">
        ❤️ <span className="favorite-count">{favorites}</span>
      </div>
    </div>
  );
}

export default HornedBeast;
