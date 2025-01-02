import React, { createContext, useContext, useState } from "react";

const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [itinerary, setItinerary] = useState([]);

  const addTalkToItinerary = (talk) => {
    if (!itinerary.some((item) => item.id === talk.id)) {
      setItinerary([...itinerary, talk]);
    }
  };

  return (
    <ItineraryContext.Provider value={{ itinerary, addTalkToItinerary }}>
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItinerary = () => useContext(ItineraryContext);