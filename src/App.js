import React, { useState } from "react";
import Search from "./components/Search";
import axios from "axios"

function App() {
  const [state, setState] = useState({ s: "", results: [], selected: {} });
  const search = e => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then((data)=>{
        console.log(data)
      })
    }
  }
  const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=3d903a27";
  const handleInput = e => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s };
    });
    
  };

  return (
    <div className="App">
      <header className="App">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
