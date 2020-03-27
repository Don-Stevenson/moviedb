import React, { useState } from "react";
import Search from "./components/Search";

function App() {
  const [state, setState] = useState({ s: "", results: [], selected: {} });
  const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=3d903a27";
  const handleInput = e => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s };
    });
    console.log(state.s);
  };

  return (
    <div className="App">
      <header className="App">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

export default App;
