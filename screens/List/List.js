import React from "react";
import PropTypes from "prop-types";
import { Text, FlatList } from "react-native";
import styles from "../Styles";
import ListControls from "../ListControls/ListControls";

export default function List({ Controls, data, onFilter, onSort, asc }) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<Controls {...{ onFilter, onSort, asc }} />}
      renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
    />
  );
}

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};

List.defaultProps = {
  Controls: ListControls,
};
