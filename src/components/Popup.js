import React from "react";
import noImageAvailable from "../images/no-image-available.png";

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img
            src={selected.Poster}
            onError={e => {
              e.target.onerror = null;
              e.target.src = noImageAvailable;
            }}
            alt={selected.Title}
          />
          <p>{selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;
