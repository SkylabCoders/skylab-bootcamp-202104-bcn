import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PositionExScreen} from './src/screens/PositionExScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
//import {DimensionsScreen} from './src/screens/DimensionsScreen';
//import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
//import {CounterScreen} from './src/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      <PositionExScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cc9f5',
  },
});
