import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from 'src/pages/Profile';
import {routes} from 'src/shared/constants/routes';
import Notifications from 'src/pages/Notifications';

export default function SettingsRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={routes.app.settingsRoutes.profile}
        component={Profile}
      />
      <Stack.Screen
        name={routes.app.settingsRoutes.notifications}
        component={Notifications}
      />
    </Stack.Navigator>
  );
}
