import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthHome from 'src/pages/AuthHome';

export default function AuthRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="auth-home" component={AuthHome} />
    </Stack.Navigator>
  );
}
