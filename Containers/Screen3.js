import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Screen3 extends React.Component {
  static navigationOptions = {
    title: 'Screen 3 in drawer 1',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am Screen 3 in drawer 1
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
