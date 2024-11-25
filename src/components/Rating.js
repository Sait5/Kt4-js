import React, { useState } from "react";

const Rating = ({ rating, isEditable = false }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  const handleClick = (index) => {
    if (isEditable) {
      setCurrentRating(index + 1);
    }
  };

  const roundedRating = Math.round(currentRating);

  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          style={{ color: index < roundedRating ? "#FFD700" : "#ccc", cursor: isEditable ? "pointer" : "default" }}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;