import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const HamburgerButton = props =>
  (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.bar} />
      <View style={styles.bar} />
      <View style={styles.bar} />
    </TouchableOpacity>
  );

export default HamburgerButton;

const styles = {
  bar: {
    width: 28,
    height: 3,
    backgroundColor: 'white',
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 8,
    marginRight: 8,
  },
};
