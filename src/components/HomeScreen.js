import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
  normalText: {
    fontFamily: 'zag-regular',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default () => (
  <View style={styles.app}>
    <View style={styles.appHeader}>
      <Image
        style={styles.headerImage}
        resizeMode="contain"
        source={require('../assets/images/fragged-empire-logo.png')}
      />
      <Text style={styles.appTitle}>Archon</Text>
      <Text style={styles.appSubtitle}>Character creator for Fragged Empire</Text>
    </View>
    <View style={styles.view}>
      <Text style={styles.normalText}>Home Screen</Text>
    </View>
  </View>
);
