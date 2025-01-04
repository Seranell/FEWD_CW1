import React from "react";
import { useItinerary } from "./ItineraryContext";
import Tag from "./Tag";
import Stars from "./Stars";

const Itinerary = () => {
  const { itinerary, remove } = useItinerary();

  //Ensure time is in hh:mm
  const formatTime = (time) => {
    if (!time || !/^\d{2}:\d{2}$/.test(time)) {
      return "Invalid time";
    }
    return time;
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
      <h2 className="text-xl font-bold mb-4">Your Schedule</h2>
      {sortedItinerary.length === 0 ? (
        <p>You haven't added any talks to your schedule yet!</p>
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
                <p className="text-gray-500">Session: {talk.session}</p>
                <span className="flex flex-wrap gap-2">
                  {talk.tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                  ))}
                </span>
                <Stars />
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