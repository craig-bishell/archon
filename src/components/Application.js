import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, StatusBar } from 'react-native';

import routes, { HOME, CHARACTERS, WEAPONS } from '../constants/routes'; // eslint-disable-line import/no-named-as-default-member
import { exampleAction } from '../redux/actions/exampleAction';

import { Router, Switch, Route } from './Routing'; // eslint-disable-line import/no-unresolved, import/extensions
import HomeScreen from './HomeScreen';
import CharacterScreen from './CharacterScreen';
import WeaponScreen from './WeaponScreen';

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

class Application extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <View style={styles.app}>
        <Router>
          <Switch>
            <Route exact path={routes[HOME]} component={HomeScreen} />
            <Route path={routes[CHARACTERS]} component={CharacterScreen} />
            <Route path={routes[WEAPONS]} component={WeaponScreen} />
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
