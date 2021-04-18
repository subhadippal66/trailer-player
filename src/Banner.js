import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import request from "./request";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const requestMovie = await axios.get(request.fetchTrending);
      console.log(
        requestMovie.data.results[
          Math.floor(Math.random() * requestMovie.data.results.length - 1)
        ]
      );
      setMovie(
        requestMovie.data.results[
          Math.floor(Math.random() * requestMovie.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function txt_slice(str, len, ending) {
    if (len == null) {
      len = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str?.length > len) {
      return str.substring(0, len - ending.length) + ending;
    } else {
      return str;
    }
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [movies, setMovies] = useState([]);
  const [trailerurl, setTrailerurl] = useState();
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

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `URL("https://image.tmdb.org/t/p/w500${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_name">
            {movie?.title || movie?.original_title || movie?.name}
          </h1>
          <div className="banner_buttons">
            <button className="button" onClick={() => handleClick(movie)}>
              Play
            </button>
            <button className="button">My List</button>
          </div>

          <h1 className="desc">{txt_slice(movie?.overview, 400)}</h1>
        </div>

        <div className="banner_fade" />
      </div>
      {trailerurl && (
        <div>
          <YouTube videoId={trailerurl} opts={opts} />
        </div>
      )}
    </>
  );
}

export default Banner;
