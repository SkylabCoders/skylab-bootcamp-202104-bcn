import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1screen} from '../screens/Page1screen';
import {Page2screen} from '../screens/Page2screen';
import {Page3screen} from '../screens/Page3screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Page2screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Page1screen"
        options={{title: 'Page 1'}}
        component={Page1screen}
      />
      <Stack.Screen
        name="Page2screen"
        options={{title: 'Page 2'}}
        component={Page2screen}
      />
      <Stack.Screen
        name="Page3screen"
        options={{title: 'Page 3'}}
        component={Page3screen}
      />
    </Stack.Navigator>
  );
};
