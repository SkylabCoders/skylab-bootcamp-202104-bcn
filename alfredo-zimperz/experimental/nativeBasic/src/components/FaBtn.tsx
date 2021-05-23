import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  position?: 'br' | 'bl';
  title: String;
  onPress: () => void;
}

export const FaBtn = ({title, onPress, position = 'bl'}: Props) => {
  const ios = () => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.btnFloatLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}>
      <View style={styles.btnFloat}>
        <Text style={styles.btnFloatText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const android = () => (
    <View
      style={[
        styles.btnFloatLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('gray', false, 30)}>
        <View style={styles.btnFloat}>
          <Text style={styles.btnFloatText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  btnFloatLocation: {
    position: 'absolute',
    bottom: 26,
  },
  right: {
    right: 26,
  },
  left: {
    left: 26,
  },
  btnFloat: {
    backgroundColor: '#6638f0',
    borderRadius: 100,
    height: 80,
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },
  btnFloatText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
