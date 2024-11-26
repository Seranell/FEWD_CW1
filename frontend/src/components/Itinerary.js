import React from "react";
import { useItinerary } from "./ItineraryContext";

const Itinerary = () => {
  const { itinerary } = useItinerary();

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
              <div className="flex flex-wrap gap-2">
                {talk.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Itinerary;
