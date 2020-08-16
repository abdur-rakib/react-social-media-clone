import React, { useState } from "react";
import { Input, AutoComplete } from "antd";

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((item, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const Search = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSearch={handleSearch}
    >
      <Input.Search placeholder="Search users ..." enterButton />
    </AutoComplete>
  );
};

export default Search;
