import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Screen3 extends React.Component {
  static navigationOptions = {
    title: 'Screen 3 in drawer 3',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am Screen 3 in drawer 3 !!!!
        </Text>

        <Button
          title="Go back to first screen in this drawer 3"
          onPress={() => this.props.navigation.navigate('screen1')}
        />

        <Button
          title="Go another drawer: drawer 2"
          onPress={() => this.props.navigation.navigate('drawer2')}
        />
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
