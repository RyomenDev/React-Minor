import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Detail from "./components/Detail";
import "./App.css";

import Container from "./components/Container";

function App() {
  const [state, setState] = useState({
    s: "sherlock",
    y: "", // state of year
    results: [],
    selected: {},
  });

  const apiUrl = "https://www.omdbapi.com/?apikey=a2526df0";

  const searchInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const searchInputByYear = (e) => {
    // Function to handle year input
    let y = e.target.value;

    setState((prevState) => {
      return { ...prevState, y: y };
    });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      let url = apiUrl;
      if (state.y) url += "&s=" + state.s + "&y=" + state.y;
      else url += "&s=" + state.s;
      axios(url).then(({ data }) => {
        let results = data.Search;

        console.log(results);

        setState((prevState) => {
          return {
            ...prevState,
            results: results,
          };
        });
      });
    }
  };

  const openDetail = (id) => {
    let url = apiUrl;
    axios(url + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return {
          ...prevState,
          selected: result,
        };
      });
    });
  };

  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Mania</h1>
      </header>
      <main>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Search
            searchInput={searchInput}
            searchInputByYear={searchInputByYear} // Add searchInputByYear to Search component
            search={search}
          />
        </div>
        <Container state={state} openDetail={openDetail} />;
        {typeof state.selected.Title != "undefined" ? (
          <Detail selected={state.selected} closeDetail={closeDetail} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
