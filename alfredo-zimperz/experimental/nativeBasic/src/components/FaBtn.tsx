import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

interface Props {
  position?: 'br | bl';
  title: String;
  onPress: () => void;
}

export const FaBtn = ({title, onPress, position = 'bl'}: Props) => {
  return (
    <TouchableOpacity
      style={
        position === 'bl'
          ? styles.btnFloatLocationBL
          : styles.btnFloatLocationBR
      }
      onPress={onPress}>
      <View style={styles.btnFloat}>
        <Text style={styles.btnFloatText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnFloatLocationBL: {
    position: 'absolute',
    bottom: 26,
    left: 26,
  },
  btnFloatLocationBR: {
    position: 'absolute',
    bottom: 26,
    right: 26,
  },
  btnFloat: {
    backgroundColor: '#6638f0',
    borderRadius: 100,
    height: 80,
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnFloatText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
