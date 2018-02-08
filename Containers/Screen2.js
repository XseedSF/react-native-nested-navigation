import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Screen2 extends React.Component {
  static navigationOptions = {
    title: 'Screen 2 in drawer 1',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am Screen 2
        </Text>
        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('screen3')}
        >
          Go to screen 3
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
