import React from "react";

const FilterName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <input
      className="form"
      type="text"
      onChange={handleChange}
      value={props.name}
    />
  );
};
export default FilterName;
