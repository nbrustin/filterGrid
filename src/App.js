import React from "react";
import "./App.css";
import Filters from "./components/Filters";
import Container from "react-bootstrap/Container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

function App() {
  return (
    <Container>
      <Filters />
    </Container>
  );
}

export default App;
