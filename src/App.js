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

  // use setstate to take in the search query
  //****************************************/
  const handleInput = e => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s };
    });
  };

  // Async Await function to make a call to the api using axios.
  //  Set the results to the state using setState
  //********************************************************** */
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

  // async function that opens up a specific movie
  // in a new window using the api call
  //******************************************** */
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

  // function that closes the popup
  //*******************************/
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

        {typeof state.selected.Title !== "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
