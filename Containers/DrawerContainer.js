import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class DrawerContainer extends React.Component {
  logout = () => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null, // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })],
    });
    this.props.navigation.dispatch(actionToDispatch);
  };

  render() {
    const { navigation } = this.props;
    const selectedIndex = this.props.activeItemKey;

    return (
      <View style={styles.container}>
        <View style={styles.appLogoContainer}>
          <Text>Nice App Logo</Text>
        </View>
        <View>
          <Text
            onPress={() => navigation.navigate('drawer1')}
            style={
          selectedIndex === 'drawer1'
            ? styles.drawerItemSelected
            : styles.drawerItem
        }
          >
        Drawer 1
          </Text>
          <Text
            onPress={() => navigation.navigate('drawer2')}
            style={
          selectedIndex === 'drawer2'
            ? styles.drawerItemSelected
            : styles.drawerItem
        }
          >
        Drawer 2
          </Text>
          <Text
            onPress={() => navigation.navigate('drawer3')}
            style={
          selectedIndex === 'drawer3'
            ? styles.drawerItemSelected
            : styles.drawerItem
        }
          >
        Drawer 3
          </Text>
          <Text onPress={this.logout} style={styles.drawerItem}>
        Log Out
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  appLogoContainer: {
    backgroundColor: 'skyblue',
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 30,
  },
  drawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    paddingTop: 15,
    paddingBottom: 15,

    textAlign: 'center',
  },
  drawerItemSelected: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center',
  },
});
