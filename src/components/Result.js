import React from "react";
import noImageAvailable from "../images/no-image-available.png"

function Result({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img
        src={result.Poster}
        onError={e => {
          e.target.onerror = null;
          e.target.src = noImageAvailable;
        }}
        alt={result.Title}
      />
      <h3>{result.Title}</h3>
    </div>
  );
}

export default Result;
