// Hooks
import { createContext, useEffect, useState } from "react";

// Cunstom Hook
import useFetch from '../hooks/useFetch'

export const TrailsContext = createContext();

export const TrailsContextProvider = ({ children }) => {
  const [data, loading] = useFetch("data/trails.json");
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    if (!!data && !loading) {
      setTrails(data)
      console.log(data);
      console.log(data.trails);
    }
  }, [data])

  function addTrail(trailData) {
    setTrails(trail => [...trail, trailData])
  }

  return (
    <TrailsContext.Provider value={{trails, setTrails, loading, addTrail}}>
        {children}
    </TrailsContext.Provider>
  );
}
