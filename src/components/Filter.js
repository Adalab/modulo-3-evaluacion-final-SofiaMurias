import React from "react";
import FilterName from "./FilterName";

const Filter = (props) => {
  return (
    <form>
      <FilterName handleFilter={props.handleFilter} name={props.name} />
    </form>
  );
};
export default Filter;
