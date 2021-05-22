import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FaBtn} from '../components/FaBtn';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={styles.container}>
      <FaBtn
        title={'Decrement'}
        onPress={() => setCounter(counter - 1)}
        position="bl"
      />
      <Text style={styles.title}>Counter: {counter}</Text>
      <FaBtn
        title={'Inrement'}
        onPress={() => setCounter(counter + 1)}
        position="br"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    top: -20,
  },
});
