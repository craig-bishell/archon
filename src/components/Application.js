import React from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { exampleAction } from '../redux/actions/exampleAction';

import HomeScreen from './HomeScreen';
import CharacterScreen from './CharacterScreen';
import WeaponScreen from './WeaponScreen';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Characters: {
      screen: CharacterScreen,
    },
    Weapons: {
      screen: WeaponScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

class Application extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return <RootStack />;
  }
}

const mapStateToProps = state => ({
  example: state.example,
});

const bindActions = dispatch => ({
  exampleAction: () => dispatch(exampleAction()),
});

export default connect(mapStateToProps, bindActions)(Application);
