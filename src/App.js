import React from "react";

import "./App.css";

const App = () => {
  fetch(
    "https://api.themoviedb.org/3/tv/2190?api_key=cae9e457e3ca82324f9c392ea76944d5"
  )
    .then((respone) => respone.json())
    .then((data) => {});
  return <div className="App">Test</div>;
};

export default App;

//cae9e457e3ca82324f9c392ea76944d5
//https://api.themoviedb.org/3/movie/76341?api_key=cae9e457e3ca82324f9c392ea76944d5
