import React from "react";
import { movies } from "../data";

function Movies() {
  const movie = movies.map((movie) => {
    return (
      <div key={movie.title}>
        {movie.title}
        {movie.time}
       <ul>{movie.genres.map((genre, index) => {
          return <li key={index}>{genre} </li>;
        })}</ul> 
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
