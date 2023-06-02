// import React, { useContext } from "react";
// // import { AppContext } from './context';
// import { useGlobalContext } from "./context";
import Movies from "./Movies";
import Search from "./Search";

const Home = () => {
  // const name = useContext(AppContext);// 1(way to use value anywhere with the help of context api (Need to write these lines)
  // const name = useGlobalContext();
  return (
    <>
      {/* 2
      <p>{name}</p> */}
      <Search />
      <Movies />
    </>
  );
};

export default Home;
