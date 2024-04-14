// Hooks
import { createContext, useState } from "react";

// Cunstom Hook
import useFetch from '../hooks/useFetch'

export const TrailsContext = createContext();

export const TrailsContextProvider = ({ children }) => {
  const [trails, loading] = useFetch("public/data/trails.json");

  return (
    <TrailsContext.Provider value={{trails, loading}}>
        {children}
    </TrailsContext.Provider>
  );
}
