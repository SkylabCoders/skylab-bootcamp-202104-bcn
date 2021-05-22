import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, View, Button, StyleSheet} from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Text>HomeScreen</Text>
      <Button
        title="Ir al detalle"
        onPress={() => navigation.navigate('Detail')}
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
