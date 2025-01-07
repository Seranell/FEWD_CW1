import React, { createContext, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [itinerary, setItinerary] = useLocalStorage("itinerary", []);

  const add = (talk) => {
    const isFilled = itinerary.some(
      (item) => item.time === talk.time
    );

    if (!isFilled && !itinerary.some((item) => item.id === talk.id)) {
      setItinerary([...itinerary, talk]);
    } else {
      alert("You're already attending a talk at this time, please remove talk first before adding this talk.");
    }
  };

  const remove = (id) => {
    setItinerary(itinerary.filter((item) => item.id !== id));
  };

  return (
    <ItineraryContext.Provider value={{ itinerary, add, remove }}>
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItinerary = () => useContext(ItineraryContext);