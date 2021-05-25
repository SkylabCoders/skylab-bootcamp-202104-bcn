import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...globalStyles.globalMargin,
        marginTop: insets.top + 20,
      }}>
      <Text style={globalStyles.title}>Settings</Text>
    </View>
  );
};
