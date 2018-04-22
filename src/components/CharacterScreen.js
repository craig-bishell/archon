/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CHARACTERS } from '../constants/routes';

import Navigation from './Navigation';

const styles = StyleSheet.create({
  boldText: {
    fontFamily: 'zag-bold',
    fontSize: 20,
  },
});

export default () => (
  <View>
    <Navigation current={CHARACTERS} />
    <Text style={styles.boldText}>Character Screen</Text>
  </View>
);

