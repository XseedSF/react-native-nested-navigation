import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Screen1 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Screen One',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am Screen 1 in drawer 3
        </Text>
        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('screen2')}
        >
          Go to next screen
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
