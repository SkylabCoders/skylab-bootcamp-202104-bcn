/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
        }}>
        Skylab mola
      </Text>
    </View>
  );
};
