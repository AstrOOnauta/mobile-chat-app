import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthHome from 'src/pages/AuthHome';
import Login from 'src/pages/Login';
import ConfirmOTP from 'src/pages/ConfirmOTP';
import {routes} from 'src/shared/constants/routes';

export default function AuthRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.auth.authHome} component={AuthHome} />
      <Stack.Screen name={routes.auth.login} component={Login} />
      <Stack.Screen name={routes.auth.confirmOTP} component={ConfirmOTP} />
    </Stack.Navigator>
  );
}
