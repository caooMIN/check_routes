import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "../Data";

const Description = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    let foundMovie = moviesData.find((el) => el.id == id);
    setMovie(foundMovie);
  }, [id]);

  return (
    <div>
      <h1>Here is the Description of '{movie.title}'</h1>
      <h2>{movie.description}</h2>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};

export default Description;
