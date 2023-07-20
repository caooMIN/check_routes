import React from "react";
import AddMovie from "../Components/AddMovie/AddMovie";
import MovieList from "../Components/movieList/MovieList";

const Movies = ({ add, movies }) => {
  return (
    <div>
      <AddMovie add={add} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
