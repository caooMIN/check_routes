import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(0);
  const titleF = (e) => setTitle(e.target.value);
  const descF = (e) => setDescription(e.target.value);
  const rateF = (e) => setRate(e.target.value);
  const imgF = (e) => setPosterUrl(e.target.value);
  const handleAdd = () => {
    const newMovie = { title, description, posterUrl, rate };
    add(newMovie);
  };
  return (
    <div>
      <Button variant="info" onClick={handleShow}>
        Add Your new movie!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Form.Label>Movie's Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Movie's Title"
          onChange={(e) => titleF(e)}
        />
        <Form.Label>Movie's Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Movie's Description"
          onChange={(e) => descF(e)}
        />
        <Form.Label>Movie's rating</Form.Label>
        <Form.Control
          type="number"
          placeholder="Movie's rating"
          onChange={(e) => rateF(e)}
        />
        <Form.Label>Movie's Image link</Form.Label>
        <Form.Control
          type="text"
          placeholder="Movie's Image link"
          onChange={(e) => imgF(e)}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAdd();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
