import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionExScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.pinkBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cc9f5',
  },
  purpleBox: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#6638f0',
  },
  pinkBox: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#f78ae0',
  },
  greenBox: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#4af2a1',
  },
});
