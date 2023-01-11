import React, {useContext} from 'react';
import {StatusBar, useTheme} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import AuthRoutes from './auth.routes';
import AuthContext from 'src/shared/contexts/AuthContext';
import AppRoutes from './app.routes';

export default function Routes() {
  const {hasUser} = useContext(AuthContext);

  const theme = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.dark[100]}
      />
      {hasUser ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
