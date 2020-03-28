import React from "react";

import Result from "./Result";

function Results({ results, openPopup }) {
  return (
    <section className="results">
      {results ? (
        results.map(result => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))
      ) : (
        <header>
          <h2> No Results! Please enter another movie </h2>
        </header>
      )}
    </section>
  );
}

export default Results;
