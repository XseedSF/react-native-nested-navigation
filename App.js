import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './Redux';
import ReduxNavigation from './Navigation/ReduxNavigation';

// create our store
const store = createStore();

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <ReduxNavigation />
    </View>
  </Provider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
