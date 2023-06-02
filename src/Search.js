import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const{query, setQuery, isError} = useGlobalContext();
  return (
    <>
  <section className="search-section">
    <h2>Search Your Favourite Movie</h2>
    <form action="#" onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          type="text"
          placeholder="Search Here"
          value={query}
          // When user write anything (e.target.value)
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
    <div className="card-error">
      {/* Shows Error getting this from Api */}
      <p>{ isError.show && isError.msg }</p>
    </div>
  </section>;
  </>
  );
};

export default Search;
