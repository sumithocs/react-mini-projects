import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/star-ratings.css";

export const StarRatings = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const [tempRating, setTempRating] = useState(0);

  const handleClick = (index) => {
    console.log(index);
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    console.log(index);
    setTempRating(index);
  };

  const handleMouseLeave = () => {
    setTempRating(rating);
  };

  return (
    <div className="star-ratings">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (tempRating || rating) ? "active" : "inactive"}
            size={40}
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            onMouseEnter={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave();
            }}
          />
        );
      })}
    </div>
  );
};
