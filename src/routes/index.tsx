import React from 'react';
import {StatusBar, useTheme} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import AuthRoutes from './auth.routes';

export default function Routes() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.dark[100]}
      />
      <AuthRoutes />
    </NavigationContainer>
  );
}
