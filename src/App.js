import React, { useState } from "react";
import requests from "./requests";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

const App = () => {
  const isLargeRow = useState(true);
  const {
    fetchTrending,
    fetchNetflixOriginal,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchDocumentaries,
  } = requests;
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row title="Trending" fetchUrl={fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={fetchNetflixOriginal}
        isLargeRow={isLargeRow}
      />
      <Row title="Top Rated" fetchUrl={fetchTopRated} />
      <Row title="Action Movies" fetchUrl={fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={fetchDocumentaries} />
    </div>
  );
};

export default App;
