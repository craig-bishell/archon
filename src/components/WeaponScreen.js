import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 3,
    fontFamily: 'zap-bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default () => (
  <View style={styles.view}>
    <Text style={styles.text}>Weapon Screen</Text>
  </View>
);
