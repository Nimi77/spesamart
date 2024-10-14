"use client"

import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

interface StarRatingProp {
  rating: number;
}

const StarRating: React.FC<StarRatingProp> = ({ rating }) => {
  // an array of stars based on the rating
  const renderStars = () => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        // Full star
        stars.push(<IoIosStar key={i} className="text-orange-red" />);
      } else if (rating >= i - 0.5) {
        // Half star
        stars.push(<IoIosStarHalf key={i} className="text-orange-red" />);
      } else {
        // Empty star
        stars.push(<IoIosStarOutline key={i} className="text-orange-red" />);
      }
    }
    return stars;
  };

  return <div className="star-rating flex gap-1">{renderStars()}</div>;
};

export default StarRating;