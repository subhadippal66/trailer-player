import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerurl, setTrailerurl] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //console.log(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  function handleClick(movie) {
    if (trailerurl) {
      setTrailerurl("");
    } else {
      movieTrailer(movie.title || movie.name || "")
        .then((url_) => {
          const urlparam = new URLSearchParams(new URL(url_).search);
          setTrailerurl(urlparam.get("v"));
        })
        .catch((e) => console.log(e));
    }
  }
  //console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters_list">
        {movies.map((movie) => (
          <img
            className={`poster`}
            onClick={() => handleClick(movie)}
            key={movie.id}
            src={`${baseImageUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
    </div>
  );
}

export default Row;
