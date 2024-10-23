"use client"; 

import React, { useState } from 'react';

interface StarRatingProps {
  totalStars?: number;
  onRate?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, onRate }) => {
  const [rating, setRating] = useState<number>(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (ratingValue: number) => {
    setRating(ratingValue);
    if (onRate) {
      onRate(ratingValue);
    }
  };

  const handleMouseEnter = (ratingValue: number) => {
    setHovered(ratingValue);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            filled={hovered ? starValue <= hovered : starValue <= rating}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

interface StarProps {
  filled: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Star: React.FC<StarProps> = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={filled ? 'gold' : 'gray'}
        width="64px"  // Adjust this to increase the size (e.g., 48px)
        height="64px" // Adjust this to increase the size (e.g., 48px)
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
      >
        <path d="M12 17.27L18.18 21 16.54 14.97 22 10.73 15.81 10.13 12 4.5 8.19 10.13 2 10.73 7.46 14.97 5.82 21z" />
      </svg>
    );
  };
  

export default StarRating;
