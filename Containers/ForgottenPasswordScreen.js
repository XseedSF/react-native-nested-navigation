import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ForgottenPasswordScreen = () => (
  <View style={styles.container}>
    <Text>
      I am Forgotten Password
    </Text>
  </View>
);

export default ForgottenPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
