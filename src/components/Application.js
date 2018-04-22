import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

import { exampleAction } from '../redux/actions/exampleAction';

import { Router, Switch, Route } from './Routing'; // eslint-disable-line import/no-unresolved, import/extensions
import HomeScreen from './HomeScreen';
import CharacterScreen from './CharacterScreen';
import WeaponScreen from './WeaponScreen';
import Logo from '../assets/images/fragged-empire-logo.png';

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  appHeader: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 250,
    height: 200,
    flex: 3,
  },
  appTitle: {
    flex: 1,
    fontFamily: 'zag-bold',
    fontSize: 16,
    color: 'white',
  },
  appSubtitle: {
    fontFamily: 'zag-regular',
    color: 'white',
  },
});

class Application extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={Logo}
          />
          <Text style={styles.appTitle}>Archon</Text>
          <Text style={styles.appSubtitle}>Character creator for Fragged Empire</Text>
        </View>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/characters" component={CharacterScreen} />
            <Route path="/weapons" component={WeaponScreen} />
          </Switch>
        </Router>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  example: state.example,
});

const bindActions = dispatch => ({
  exampleAction: () => dispatch(exampleAction()),
});

export default connect(mapStateToProps, bindActions)(Application);
