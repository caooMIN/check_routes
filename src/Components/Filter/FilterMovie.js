import React from "react";
import { Form } from "react-bootstrap";
import ReactStars from "react-stars";

const FilterMovie = ({ inputSearch, setInputSearch, newRate, setNewRate }) => {
  //console.log(inputSearch); checking if the search input works 'not the search of words itself
  //console.log(newRate);
  return (
    <div>
      <Form.Control
        placeholder="Search"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <ReactStars
        count={5}
        size={24}
        color2={"#ffd700"}
        half={false}
        value={newRate}
        onChange={(rate) => setNewRate(rate)}
      />
    </div>
  );
};

export default FilterMovie;
