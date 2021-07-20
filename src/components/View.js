import { useState, useEffect } from "react";
import "./view.css";

const View = () => {
  let movieId = window.location.href.split("/").pop();
  const [movieResult, setMovieResult] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5829099bf6ef747abbd3935b95b43513&query=${movieId}`
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieResult(response.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [movieId]);

  return (
    <div id="container">
      <img
        className="movieImage"
        src={`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`}
        alt=""
      />
      <ul>
        <li className="movieInformation">
          {" "}
          <h2>{movieResult.title}</h2>
        </li>
        <li className="movieInformation">
          <p>{movieResult.overview}</p>
        </li>
        <li className="movieInformation">
          <h3>
            <span>NOTA:</span>
            {movieResult.vote_average}
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default View;
