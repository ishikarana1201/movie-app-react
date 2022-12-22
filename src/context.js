import React, { createContext, useContext, useEffect, useState } from "react";

// Create context
const AppContext = createContext();

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
// Create app provider
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("titanic");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const result = await fetch(url);
      const data = await result.json();
      //   console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: "false",
          msg: "",
        });
        setMovie(data.Search);
      } else {
        setIsError({
          show: "true",
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 800);
    return () => clearTimeout(timerOut);
  }, [query]);

  return (
    <AppContext.Provider value={{ isError, isLoading, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

// Create custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
