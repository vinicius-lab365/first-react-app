import { useEffect, useState } from "react";

function useFetch(url) {
 const [data, setData] = useState(null);
 const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  setIsLoading(true);
  fetch(url)
   .then((res) => res.json())
   .then((value) => {
    setData(value);
    setIsLoading(false);
   })
   .catch((err) => {
    window.alert("Ocorreu um erro ao buscar os dados");
    console.error(err);
   })
   .finally(() => setIsLoading(false));
 }, [url]);

 return [data, isLoading];
}

export default useFetch;