import React from "react";
import requests from "./requests";
import "./App.css";
import Row from "./components/Row";

const App = () => {
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
    <div className="App">
      <Row title="Trending" fetchUrl={fetchTrending} />
      <Row title="Netflix Originals" fetchUrl={fetchNetflixOriginal} />
      <Row title="Top Rated" fetchUrl={fetchTopRated} />
      <Row title="Action Movies" fetchUrl={fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={fetchDocumentaries} />
    </div>
  );
};

export default App;
