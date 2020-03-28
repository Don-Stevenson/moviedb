import React from "react";

import Result from "./Result";

function Results({ results, openPopup }) {
  return (
    <section className="results">
      {console.log("results are ", results)}
      {results ? (
        results.map(result => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))
      ) : (
        <header>
          <h1> No Results! </h1>
          <h2> Please enter another movie</h2>
        </header>
      )}
    </section>
  );
}

export default Results;
