import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, View, Button, StyleSheet} from 'react-native';

export const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Text>DetailScreen</Text>
      <Button
        title="Ir al detalle"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
