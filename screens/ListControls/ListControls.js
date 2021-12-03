import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "../Styles";
import ListFilter from "../ListFilter/ListFilter";
import ListSort from "../ListSort/ListSort";

export default function ListControls({ onFilter, onSort, asc }) {
  return (
    <View style={styles.controls}>
      <ListFilter onFilter={onFilter} />
      <ListSort onSort={onSort} asc={asc} />
    </View>
  );
}

ListControls.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};
