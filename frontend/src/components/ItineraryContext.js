import React, { createContext, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [itinerary, setItinerary] = useLocalStorage("itinerary", []);

  const add = (talk) => {
    if (!itinerary.some((item) => item.id === talk.id)) {
      setItinerary([...itinerary, talk]);
    }
  };

  const remove = (id) => {
    setItinerary(itinerary.filter((item) => item.id !== id));
  };

  return (
    <ItineraryContext.Provider
      value={{ itinerary, add, remove }}
    >
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItinerary = () => useContext(ItineraryContext);
