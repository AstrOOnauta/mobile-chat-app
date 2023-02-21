import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {routes} from 'src/shared/constants/routes';

import Chats from 'src/pages/Chats';
import Groups from 'src/pages/Groups';

const Tab = createMaterialTopTabNavigator();

export default function HomeRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FBB034',
        tabBarInactiveTintColor: '#B9B9B9',
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          textTransform: 'capitalize',
        },
        tabBarStyle: {backgroundColor: '#303030', elevation: 20},
        tabBarIndicatorStyle: {
          backgroundColor: '#FBB034',
        },
      }}>
      <Tab.Screen name={routes.app.homeRoutes.chats} component={Chats} />
      <Tab.Screen name={routes.app.homeRoutes.groups} component={Groups} />
    </Tab.Navigator>
  );
}
