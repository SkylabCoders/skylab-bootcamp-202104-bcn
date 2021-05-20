/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        onPress={() => setCounter(counter - 1)}
        title="-"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        style={{
          fontSize: 36,
          top: -20,
        }}
      />
      <Text
        style={{
          fontSize: 36,
          textAlign: 'center',
          top: -20,
        }}>
        Counter: {counter}
      </Text>
      <Button
        onPress={() => setCounter(counter + 1)}
        title="+"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
