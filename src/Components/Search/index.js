import React from "react";
import _debounce from "lodash/debounce";

const Search = (props) => {
  const { onSearch } = props;
  const onChange = _debounce((e) => onSearch(e.target.value), 1000);
  return (
    <div className="search-bar row">
      <div className="col-sm-12">
        <input
          className="form-control"
          type="text"
          placeholder="Search blog by title"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
