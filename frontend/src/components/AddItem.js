import React, { useState } from "react";
import { useItinerary } from "./ItineraryContext";

const AddItem = ({ talk }) => {
  const { add } = useItinerary();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    add(talk);
    setIsAdded(true);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={isAdded}
      className={`px-4 py-2 rounded ${
        isAdded ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
    >
      {isAdded ? "Added" : "Add to Itinerary"}
    </button>
  );
};

export default AddItem;
