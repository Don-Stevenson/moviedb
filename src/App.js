import React, { useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  //setting and handling the state through usestate
  //***********************************************
  const [state, setState] = useState({
    searchVal: "",
    results: [],
    selected: {}
  });

  // handling of the apiURL from process.env
  //****************************************

  const apiURL = process.env.REACT_APP_MOVIE_API_KEY;

  // use setstate to take in the search query
  //****************************************/
  const handleInput = e => {
    let searchVal = e.target.value;
    setState(prevState => {
      return { ...prevState, searchVal: searchVal };
    });
  };

  // Async Await function to make a call to the api using axios.
  //  Set the results to the state using setState
  //**********************************************************/
  async function search(e) {
    try {
      if (e.key === "Enter") {
        const data = await axios(apiURL + "&searchVal=" + state.searchVal);
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
  //*********************************************/
  async function openPopup(id) {
    try {
      const data = await axios(apiURL + "&i=" + id);
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
        {
          //handle the search results, opening the pop up and closing the popup upon selection
        }
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
