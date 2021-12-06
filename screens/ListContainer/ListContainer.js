import React, { useState } from "react";
import List from "../List/List";

const mapItems = (items) => {
  return items.map((value, i) => ({
    key: i.toString(),
    value,
  }));
};

const handleSort = (a, b, asc) => {
  if (asc) {
    console.log("giảm dần", -1);
    if (a < b) return -1;

    console.log("giữ nguyên", 0);
    if (a === b) return 0;

    console.log("tăng dần", 1);
    return 1;
  } else {
    console.log("giảm dần", -1);
    if (a > b) return -1;

    console.log("giữ nguyên", 0);
    if (a === b) return 0;

    console.log("tăng dần", 1);
    return 1;
  }
};

const filterAndSort = (data, text, asc) => {
  return data
    .filter((i) => text.length === 0 || i.includes(text))
    .sort((a, b) => handleSort(a, b, asc));
};
// ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
// : (a, b) => (a > b ? -1 : a === b ? 0 : 1)

// handleSort()
// 1

function ListContainer(props) {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState(
    filterAndSort(
      new Array(100).fill(null).map((v, i) => i),
      ""
    )
  );
  return (
    <List
      data={mapItems(data)}
      asc={asc}
      onFilter={(text) => {
        setFilter(text);
        setData(filterAndSort(data, text, asc));
      }}
      onSort={() => {
        setAsc(!asc);
        setData(filterAndSort(data, filter, asc));
      }}
    />
  );
}

export default ListContainer;
