import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import movieDB from '../api/movieDB';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing').then(resp => {});
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="ir al detalle"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};
export default HomeScreen;
