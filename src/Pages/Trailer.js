import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "../Data";
const Trailer = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    let foundMovie = moviesData.find((el) => el.id == id);
    setMovie(foundMovie);
  }, [id]);

  return (
    <div>
      <h1>Here is the Trailer of '{movie.title}'</h1>
      <h1>
        <iframe
          src={movie.trailer}
          title="Movie Trailer"
          allowfullscreen
          width={1024}
          height={480}
        ></iframe>
      </h1>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};

export default Trailer;
