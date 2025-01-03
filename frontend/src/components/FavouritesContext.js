import React, { createContext, useContext } from "react";
import {useLocalStorage} from "./useLocalStorage";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [interestedTalks, setInterestedTalks] = useLocalStorage(
    "interestedTalks",
    []
  );

  const toggleFavourite = (talk) => {
    setInterestedTalks((prev) =>
      prev.some((t) => t.id === talk.id)
        ? prev.filter((t) => t.id !== talk.id)
        : [...prev, talk]
    );
  };

  return (
    <FavouritesContext.Provider value={{ interestedTalks, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
