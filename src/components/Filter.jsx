import React from "react";
import { useEffect } from "react";
import { Button, Col } from "react-bootstrap";
import columnsData from "../dummyData/columnsData";

const Filter = ({ filter, deleteFilter, handleChange }) => {
  debugger;
  return (
    <>
      <Col md={4}>
        <select
          style={{ width: "90%" }}
          value={filter.filter.column.displayName}
          onChange={handleChange}
          name="column"
        >
          <option value="default" disabled>
            Select Column{" "}
          </option>
          {columnsData.map((colObject, index) => (
            <option key={index} value={colObject.column.displayName}>
              {colObject.column.displayName}
            </option>
          ))}
        </select>
      </Col>
      <Col md={3}>
        <select
          style={{ width: "90%" }}
          value={filter.filter.operator?.operatorId}
          onChange={handleChange}
          name="condition"
        >
          {columnsData
            .filter(
              (colObject) =>
                colObject.column.dataField === filter.filter.column.dataField
            )[0]
            .operators?.map((operatorsObj, index) => (
              <option key={index} value={operatorsObj.operatorId}>
                {operatorsObj.text}
              </option>
            ))}
        </select>
      </Col>
      <Col md={4}>
        <input
          style={{ width: "90%" }}
          value={filter.filter.inputValue}
          onChange={handleChange}
          name="inputValue"
        ></input>
      </Col>
      <Col md={1}>
        <Button
          id={filter.id}
          variant="light"
          onClick={() => deleteFilter(filter.id)}
        >
          X
        </Button>
      </Col>
    </>
  );
};

export default Filter;
