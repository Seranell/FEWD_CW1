import React from "react";
import { useItinerary } from "./ItineraryContext";

const Itinerary = () => {
  const { itinerary, remove } = useItinerary();

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Your Itinerary</h2>
      {itinerary.length === 0 ? (
        <p>No talks added to your itinerary yet.</p>
      ) : (
        <ul className="space-y-2">
          {itinerary.map((talk) => (
            <li key={talk.id} className="p-2 border rounded">
              <h3 className="font-semibold">{talk.title}</h3>
              <p>{talk.speaker}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {talk.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => remove(talk.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Itinerary;