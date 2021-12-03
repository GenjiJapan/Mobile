import React, { useState } from "react";
import List from "../List/List";

const mapItems = (items) => {
  return items.map((value, i) => ({
    key: i.toString(),
    value,
  }));
};

const filterAndSort = (data, text, asc) => {
  return data
    .filter((i) => text.length === 0 || i.includes(text))
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );
};

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
