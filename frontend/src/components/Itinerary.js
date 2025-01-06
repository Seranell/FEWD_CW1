import React from "react";
import { useItinerary } from "./ItineraryContext";
import Tag from "./Tag";
import Stars from "./Stars";

const Itinerary = () => {
  const { itinerary, remove } = useItinerary();

  const formatTime = (time) => {
    if (!time || !/^\d{2}:\d{2}$/.test(time)) {
      return "Invalid time";
    }
    return time;
  };

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
    <div className="container mx-auto p-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">Your Schedule</h2>
      {sortedItinerary.length === 0 ? (
        <p className="text-lg">You haven't added any talks to your schedule yet!</p>
      ) : (
        <div className="space-y-6">
          {sortedItinerary.map((talk) => (
            <div
              key={talk.id}
              className="p-4 bg-white border rounded shadow-md flex flex-wrap items-start justify-between sm:flex-row flex-col"
            >
              <div className="w-32 text-lg font-semibold text-gray-800">
                {formatTime(talk.time)}
              </div>
              <div className="flex-1 mb-4 sm:mb-0">
                <h3 className="font-semibold text-lg text-gray-900">{talk.title}</h3>
                <p className="text-sm text-gray-500">{talk.speaker}</p>
                <p className="text-sm text-gray-500">Session: {talk.session}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {talk.tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                  ))}
                </div>
                <div className="mt-2">
                  <Stars position={talk.id} />
                </div>
              </div>
              <div className="mt-2 sm:mt-0 sm:ml-4">
                <button
                  onClick={() => remove(talk.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
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