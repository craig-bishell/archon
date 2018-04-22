/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { WEAPONS } from '../constants/routes';

import Navigation from './Navigation';

const styles = StyleSheet.create({
  boldText: {
    fontFamily: 'zag-bold',
    fontSize: 20,
  },
});

export default () => (
  <View>
    <Navigation current={WEAPONS} />
    <Text style={styles.boldText}>Weapons Screen</Text>
  </View>
);

