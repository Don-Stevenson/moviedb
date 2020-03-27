import React from "react";

function Search({ handleInput, search }) {
  return (
    <section className="search">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
