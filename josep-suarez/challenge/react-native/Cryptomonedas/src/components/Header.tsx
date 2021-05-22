import React, {FC} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const Header: FC = () => {
  return <Text style={styles.title}>Cryptomonedas</Text>;
};
const styles = StyleSheet.create({
  title: {
    color: 'blue',
  },
});
export default Header;
