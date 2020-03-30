import React, { useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
const movieApiKey = process.env.movieApiKey;

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=" + movieApiKey;

  async function search(e) {
    try {
      if (e.key === "Enter") {
        const data = await axios(apiurl + "&s=" + state.s);
        let results = data.data.Search;

        setState(prevState => {
          return { ...prevState, results: results };
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleInput = e => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s };
    });
  };

  async function openPopup(id) {
    try {
      const data = await axios(apiurl + "&i=" + id);
      let result = data.data;

      setState(prevState => {
        return { ...prevState, selected: result };
      });
    } catch (err) {
      console.log(err);
    }
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
