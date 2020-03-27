import React, { useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=3d903a27";

  async function search(e) {
    try { 
    if (e.key === "Enter") {
      const data = await axios(apiurl + "&s=" + state.s)
        let results = data.data.Search;

        setState(prevState => {
          return { ...prevState, results: results };
        });
      };
    } catch (err) {
    console.log(err)
  }
}

  const handleInput = e => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result };
      });
    });
  };

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
