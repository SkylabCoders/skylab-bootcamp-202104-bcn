import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            ...styles.pinkBox,
            width: width * 0.5,
          }}
        />
        <View style={styles.purpleBox} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  pinkBox: {
    height: '50%',
    backgroundColor: '#f78ae0',
  },
  purpleBox: {
    backgroundColor: '#6638f0',
  },
  title: {
    fontSize: 30,
  },
});
