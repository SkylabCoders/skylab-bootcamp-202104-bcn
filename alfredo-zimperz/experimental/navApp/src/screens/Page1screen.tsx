import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1screen = ({navigation}: Props) => {
  return (
    <View style={[globalStyles.globalMargin, styles.container]}>
      <Text style={globalStyles.title}>Page 1</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2screen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
