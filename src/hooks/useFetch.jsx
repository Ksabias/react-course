import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const getUsers = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await fetch(url, { signal });
        const resData = await res.json();
        setData(resData);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
};
