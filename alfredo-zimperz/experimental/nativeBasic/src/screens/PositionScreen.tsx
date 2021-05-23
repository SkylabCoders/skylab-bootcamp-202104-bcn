import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.pinkBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#6638f0',
    borderWidth: 5,
    borderColor: 'white',
  },
  pinkBox: {
    width: 100,
    height: 100,
    backgroundColor: '#f78ae0',
    borderWidth: 5,
    borderColor: 'white',
  },
});
