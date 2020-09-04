import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "../banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      let randomOrignial = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(
        //  grab a random item from the netflix original list and use it as the banner
        request.data.results[randomOrignial]
      );
      console.log(request.data.results.length);
      return request;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__category">
          <strong>Netflix</strong> original
        </h1>
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* {some of the entries have different keys} */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <p className="banner__description">
            {truncate(movie?.overview, 150)}
          </p>
        </div>
      </div>
      <div className="banner--fade"></div>
    </header>
  );
};

export default Banner;
