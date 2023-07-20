import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home";
import { moviesData } from "./Data";
import Movies from "./Pages/Movies";
import ErrorPage from "./Pages/ErrorPage";
import Description from "./Pages/Description";
import Trailer from "./Pages/Trailer";
function App() {
  const [movies, setMovies] = useState(moviesData);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies add={add} movies={movies} />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/trailer/:id" element={<Trailer />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
