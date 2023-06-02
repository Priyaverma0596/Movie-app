import React, { useContext, useEffect, useState } from "react";
//Parent k pass jo data hai wo parents se lena ---Context ka kaam hai else bahot problem hoti hai
// AppContext(warehouse)
// AppProvider(Delivery Boy) -Pura Area cover karna(wrap in index.js file)
// Consumer (usecontext(you))

 export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();

//Create Provider Fun
const AppProvider = ({ children }) => {
  //Using useState hook
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  //Passing 2 objects in usestate
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("titanic");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      //To read data we need to convrt in json
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
        setIsError({
          show: false,
          msg: "",
        });
        
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //first time pageload pe getmovie() call hoga
  useEffect(() => {
    //Debounce 
    //Search with some delay ---using settimeout
    let timerOut = setTimeout(() =>{
     //user type query will apend in API
    getMovies(`${API_URL} &s=${query}`);
    }, 500)
    //Clean time out
    return () => clearTimeout(timerOut);
    
    //Passing query everytime [query]
  }, [query]);
  //App ka data hum get kar sake we use --children
  //we get appcontex.provider
  //Data(ware house) pass in value
  return (
    <AppContext.Provider value={{ isLoading, isError, movie ,query, setQuery}}>
      {children}
    </AppContext.Provider>
  );
};

//Case 2: To do it easily need to create  Global custom Hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
