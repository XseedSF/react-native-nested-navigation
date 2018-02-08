import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Screen2 extends React.Component {
  static navigationOptions = {
    title: 'Screen 2 in drawer 2',
    drawerLabel: 'Screen Two',
    drawerIcon: () =>
      (<Image
        source={{ uri: 'https://dummyimage.com/60x60/000/fff.jpg&text=2' }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am Screen 2 in drawer 2
        </Text>
        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('screen3')}
        >
          Go to screen 3 in drawer 2
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
