import React from "react";
import { Button } from "react-bootstrap";

const Header = ({ addFilter }) => {
  return (
    <>
      <Button onClick={addFilter}>+</Button>
    </>
  );
};

export default Header;
