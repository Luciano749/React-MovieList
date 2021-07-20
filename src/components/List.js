import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/4/list/1?api_key=5829099bf6ef747abbd3935b95b43513"
    )
      .then((response) => response.json())
      .then((response) => {
        setMoviesList(response.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!moviesList) return null;

  console.log(moviesList);

  return (
    <ul className="movieList">
      {moviesList.map((item, idx) => (
        <Link key={idx} to={`/movies/${item.title}`}>
          <li className="item">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default List;
