import React, { useEffect, useState } from "react";
import Header from "./Header";
import FilterList from "./FilterList";
import data from "../dummyData/data";
import { v4 as uuidv4 } from "uuid";

//all filter logic will happen in this parent component
const Filters = () => {
  const [filters, setFilters] = useState(
    data.map((filter, index) => {
      return {
        id: uuidv4(),
        filter,
      };
    })
  );

  //useeffect
  useEffect(() => {
    //get data here
  }, []);

  const handleChange = (event) => {
    //need to update state with updated value
    const { name, value } = event.target;
    console.log(name, value);
  };

  const addFilter = (event) => {
    debugger;
    event.preventDefault();
    console.log("add filter now");
    setFilters((filters) => [
      ...filters,
      {
        id: uuidv4(),
        filter,
      },
    ]);
  };

  const deleteFilter = (recId) => {
    debugger;
    console.log("delete");
    console.log(recId);
    setFilters(filters.filter((filter) => filter.id !== recId));
    //filter out this filter
  };

  const filter = {
    recId: "",
    column: "",
    condition: "",
    value: "",
  };

  return (
    <>
      <Header addFilter={addFilter} />
      <FilterList
        filters={filters}
        deleteFilter={deleteFilter}
        handleChange={handleChange}
      />
    </>
  );
};
export default Filters;
