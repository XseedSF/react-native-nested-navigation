import React from 'react';
import { Animated, Easing } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import HamburgerButton from './HamburgerButton';

import LoginScreen from '../Containers/LoginScreen';
import SignupScreen from '../Containers/SignupScreen';
import ForgottenPasswordScreen from '../Containers/ForgottenPasswordScreen';
import Screen1 from '../Containers/Screen1';
import Screen2 from '../Containers/Screen2';
import Screen3 from '../Containers/Screen3';

import Screen2part1 from '../Containers/Screen2_1';
import Screen2part2 from '../Containers/Screen2_2';
import Screen2part3 from '../Containers/Screen2_3';

import Screen3part1 from '../Containers/Screen3_1';
import Screen3part2 from '../Containers/Screen3_2';
import Screen3part3 from '../Containers/Screen3_3';

import DrawerContainer from '../Containers/DrawerContainer';

// drawer stack
// const DrawerStack = DrawerNavigator(
//   {
//     screen1: { screen: Screen1 },
//     screen2: { screen: Screen2 },
//     screen3: { screen: Screen3 },
//   },
//   {
//     gesturesEnabled: false,
//     contentComponent: props => <DrawerContainer {...props} />,
//   },
// );

// const DrawerNavigation = StackNavigator(
//   {
//     DrawerStack: { screen: DrawerStack },
//   },
//   {
//     headerMode: 'screen',
//     navigationOptions: ({ navigation }) => ({
//       headerStyle: { backgroundColor: 'green' },
//       title: 'Logged In to your app!',
//       gesturesEnabled: false,
//       headerLeft: (
//         <Text
//           onPress={() => {
//             navigation.navigate('DrawerToggle');
//           }}
//         >
//           Menu
//         </Text>
//       ),
//     }),
//   },
// );


const Screen1Stack = StackNavigator(
  {
    screen1: {
      screen: Screen1,
      navigationOptions: ({ navigation }) => ({
        title: 'Drawer 1',
        headerLeft: (
          <HamburgerButton
            onPress={() => navigation.navigate('DrawerToggle')}
          />
        ),
      }),
    },
    screen2: { screen: Screen2 },
    screen3: { screen: Screen3 },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: { backgroundColor: '#1080ca' },
      headerBackTitle: null,
      headerTintColor: 'white',
      gesturesEnabled: false,
    },
  },
);

const Screen2Stack = StackNavigator(
  {
    screen1: {
      screen: Screen2part1,
      navigationOptions: ({ navigation }) => ({
        title: 'Drawer 2',
        headerLeft: (
          <HamburgerButton
            onPress={() => navigation.navigate('DrawerToggle')}
          />
        ),
      }),
    },
    screen2: { screen: Screen2part2 },
    screen3: { screen: Screen2part3 },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: { backgroundColor: '#1080ca' },
      headerBackTitle: null,
      headerTintColor: 'white',
      gesturesEnabled: false,
    },
  },
);

const Screen3Stack = StackNavigator(
  {
    screen1: {
      screen: Screen3part1,
      navigationOptions: ({ navigation }) => ({
        title: 'Drawer 3 !!',
        headerLeft: (
          <HamburgerButton
            onPress={() => navigation.navigate('DrawerToggle')}
          />
        ),
      }),
    },
    screen2: { screen: Screen3part2 },
    screen3: {
      screen: Screen3part3,
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: { backgroundColor: '#1080ca' },
      headerBackTitle: null,
      headerTintColor: 'white',
      gesturesEnabled: false,
    },
  },
);

const DrawerNavigatorWithoutStack = DrawerNavigator(
  {
    drawer1: { screen: Screen1Stack },
    drawer2: { screen: Screen2Stack },
    drawer3: { screen: Screen3Stack },
  },
  {
    gesturesEnabled: false,
    contentComponent: props => <DrawerContainer {...props} />,
  },
);

// login stack
const LoginStack = StackNavigator(
  {
    loginScreen: { screen: LoginScreen },
    signupScreen: { screen: SignupScreen },
    forgottenPasswordScreen: {
      screen: ForgottenPasswordScreen,
      navigationOptions: { title: 'Forgot Password - Olvide mi contraseña' },
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: { backgroundColor: '#1080ca' },
      headerBackTitle: null,
      headerTintColor: 'white',
      gesturesEnabled: false,
    },
  },
);

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

const PrimaryNav = StackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigatorWithoutStack },
  },
  {
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack',
    transitionConfig: noTransitionConfig,
  },
);

export default PrimaryNav;
