import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>{movie.rate}</Card.Text>
          <ReactStars
            count={5}
            size={24}
            value={movie.rate}
            edit={false}
            half={true}
          />
        </Card.Body>
        <Button onClick={() => navigate(`/description/${movie.id}`)}>
          Description
        </Button>
        <Button onClick={() => navigate(`/trailer/${movie.id}`)}>
          Trailer
        </Button>
      </Card>
    </div>
  );
};

export default MovieCard;
