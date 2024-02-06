import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <>
      <h1>Directors Page</h1>
     <ul> {directors.map((director) => {
        return (
          <li key={director.name}>
           <h4> {"Name:" + director.name}{" "}</h4>
            <ul>
              {director.movies.map((movie) => {
                return <li key={movie}>{movie}</li>;
              })}
            </ul>
          </li>
        );
      })}</ul>
    </>
  );
}

export default Directors;
