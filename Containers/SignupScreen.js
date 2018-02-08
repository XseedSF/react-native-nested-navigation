import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up - Registro',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>I am Signup Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
