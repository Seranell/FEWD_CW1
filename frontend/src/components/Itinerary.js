import React from "react";
import { useItinerary } from "./ItineraryContext";

const Itinerary = () => {
  const { itinerary, remove } = useItinerary();

  const formatTime = (timeString) => {
    if (!timeString || !/^\d{2}:\d{2}$/.test(timeString)) {
      return "Invalid time";
    }
    return timeString;
  };

  //Sort talks into time order
  const sortByTime = (a, b) => {
    const [aHours, aMinutes] = a.time.split(":").map(Number);
    const [bHours, bMinutes] = b.time.split(":").map(Number);

    if (aHours === bHours) {
      return aMinutes - bMinutes;
    }
    return aHours - bHours;
  };

  const sortedItinerary = [...itinerary].sort(sortByTime);

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Your Itinerary</h2>
      {sortedItinerary.length === 0 ? (
        <p>No talks added to your itinerary yet.</p>
      ) : (
        <div className="space-y-4">
          {sortedItinerary.map((talk) => (
            <div
              key={talk.id}
              className="p-4 bg-white border rounded shadow flex items-start">
              <div className="w-32 text-lg font-semibold text-gray-800">
                {formatTime(talk.time)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{talk.title}</h3>
                <p className="text-gray-500">{talk.speaker}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {talk.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-200 text-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => remove(talk.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Itinerary;