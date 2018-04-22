/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Link } from './Routing'; // eslint-disable-line import/no-unresolved, import/extensions

const styles = StyleSheet.create({
  view: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontFamily: 'zag-bold',
    fontSize: 20,
  },
  normalText: {
    fontFamily: 'zag-regular',
    fontSize: 18,
  },
});

export default () => (
  <View style={styles.view}>
    <Text style={styles.boldText}>Character Screen</Text>
    <Link to="/">
      <Text style={styles.normalText}>Home</Text>
    </Link>
    <Link to="/weapons">
      <Text style={styles.normalText}>Weapons</Text>
    </Link>
  </View>
);
