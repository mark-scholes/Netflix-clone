import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "700vh",
    width: "70%",
    playerVars: {
      //https://developers.google.com/youtube/player-parameters,
      autoplay: 1,
    },
  };
  const base_url = "https://image.tmdb.org/t/p/original/";

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name, "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })

        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => (
          <img
            className={`row__img ${isLargeRow ? "row__imgLarge" : ""}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            // {some movies don't have the a backdrop image, in these cases use poster instead}
            src={`${base_url}/${
              isLargeRow || !movie.backdrop_path
                ? movie.poster_path
                : movie.backdrop_path
            }`}
            alt={movie?.title || movie?.name || movie?.original_name}
          />
        ))}
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
