/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { HOME } from '../constants/routes';
import Navigation from './Navigation';
import Logo from '../assets/images/fragged-empire-logo.png';

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#222',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 250,
    height: 200,
  },
  appTitle: {
    fontFamily: 'zag-bold',
    fontSize: 16,
    color: 'white',
  },
  appSubtitle: {
    fontFamily: 'zag-regular',
    color: 'white',
  },
});

export default () => (
  <View>
    <Navigation current={HOME} />
    <View style={styles.appHeader}>
      <Image
        style={styles.headerImage}
        resizeMode="contain"
        source={Logo}
      />
      <Text style={styles.appTitle}>Archon</Text>
      <Text style={styles.appSubtitle}>Character creator for Fragged Empire</Text>
    </View>
  </View>
);

