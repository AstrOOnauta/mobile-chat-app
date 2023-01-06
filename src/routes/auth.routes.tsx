import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthHome from 'src/pages/AuthHome';
import Login from 'src/pages/Login';
import ConfirmOTP from 'src/pages/ConfirmOTP';
import Onboarding from 'src/pages/Onboarding';

export default function AuthRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="auth-home" component={AuthHome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="confirm-otp" component={ConfirmOTP} />
      <Stack.Screen name="onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
}
