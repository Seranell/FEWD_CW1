import React from "react";
import Star from "./Star";

export default function StarAverage({ ratings = [], totalStars = 5 }) {
  const average = ratings.length > 0
    ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
    : 0;

  const roundedAverage = Math.round(average);

  return (
    <div>
      <div className="flex space-x-1">
        {[...Array(totalStars)].map((_, i) => (
          <Star key={i} selected={i < roundedAverage} />
        ))}
            <p className="mt-2 text-sm text-gray-600">{average.toFixed(1)} ({ratings.length} ratings)</p>
      </div>
  
    </div>
  );
}
