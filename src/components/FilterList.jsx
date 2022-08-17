import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filter from "./Filter";
import { Row, Button } from "react-bootstrap";

const FilterList = ({ filters, deleteFilter, handleChange }) => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  //filters will be objects of recIds, column, condition and value

  const SaveFilters = (event) => {
    event.preventDefault();
    console.log("save filters");
  };

  const CancelFilters = (event) => {
    event.preventDefault();
    console.log("cancel filters");
  };

  return (
    <>
      <div className="my-4 d-flex justify-content-between">
        <div></div>
        <div>
          {/* <Button variant="outline-dark" onClick={AddFilter}>
            <FontAwesomeIcon icon="plus" />
          </Button> */}
        </div>
      </div>

      <Row>
        {filters.map((filter, index) => {
          return (
            <Filter
              key={filter.id}
              filter={filter}
              deleteFilter={deleteFilter}
              handleChange={handleChange}
            />
          );
        })}
      </Row>
      <div className="d-flex justify-content-between mt-2">
        <div></div>
        <div>
          <Button
            style={{ width: "100px" }}
            variant="primary"
            onClick={SaveFilters}
          >
            Save
          </Button>
          <Button
            style={{ width: "100px" }}
            variant="secondary"
            onClick={CancelFilters}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

const getFilters = () => {
  const filters = localStorage.getItem("LoLoanFilters");
  if (filters === null) return [];
  return JSON.parse(filters);
};

export default FilterList;
