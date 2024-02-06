import React from "react";
import { movies } from "../data";

function Movies() {
  const movie = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>Time: {movie.time} minutes</p>
        <ul>
          {movie.genres.map((genre, genreIndex) => (
            <li key={genreIndex}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <>
      <h1>Movies Page</h1>
      {movies.map(() => {
        return movie;
      })}
    </>
  );
}

export default Movies;
