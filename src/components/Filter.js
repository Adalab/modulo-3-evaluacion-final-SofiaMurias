import React from "react";
import "../stylesheet/App.scss";
import FilterName from "./FilterName";

const Filter = (props) => {
  return (
    <form>
      <FilterName handleFilter={props.handleFilter} name={props.name} />
    </form>
  );
};
export default Filter;
