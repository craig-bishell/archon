/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import routes from '../constants/routes';

import { Link } from './Routing'; // eslint-disable-line import/no-unresolved, import/extensions

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  linkText: {
    fontFamily: 'zag-regular',
    fontSize: 18,
  },
  normalText: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    fontFamily: 'zag-regular',
    fontSize: 18,
  },
});

const Navigation = ({ current }) => (
  <View style={styles.navigation}>
    {
      Object.keys(routes)
        .map(route => route === current
          ? <Text key={route} style={styles.normalText}>{route}</Text>
          : (
            <Link style={styles.navItem} key={route} to={routes[route]}>
              <Text style={styles.linkText}>{route}</Text>
            </Link>
          ))
    }
  </View>
);

Navigation.propTypes = {
  current: PropTypes.string.isRequired,
};

export default Navigation;
