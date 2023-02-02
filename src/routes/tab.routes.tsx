import React from 'react';
import {Platform} from 'react-native';
import {Box} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Icon from 'phosphor-react-native';

import Home from 'src/pages/Home';
import Camera from 'src/pages/Camera';
import Contacts from 'src/pages/Contacts';
import Settings from 'src/pages/Settings';
import {routes} from 'src/shared/constants/routes';

export default function TabRoutes() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#FBB034',
          position: 'absolute',
          padding: 25,
          height: Platform.OS === 'ios' ? 90 : 70,
        },
        tabBarItemStyle: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -30,
        },
      })}>
      <Tab.Screen
        name={routes.app.tabRoutes.home}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused}) =>
            focused ? (
              <Box
                bg="light[0]"
                w={20}
                h={12}
                borderRadius={50}
                alignItems="center"
                justifyContent="center">
                <Icon.ChatText weight="fill" color="#FBB034" size={size} />
              </Box>
            ) : (
              <Icon.ChatText weight="fill" color="#303030" size={size} />
            ),
        }}
      />
      <Tab.Screen
        name={routes.app.tabRoutes.camera}
        component={Camera}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused}) =>
            focused ? (
              <Box
                bg="light[0]"
                w={20}
                h={12}
                borderRadius={50}
                alignItems="center"
                justifyContent="center">
                <Icon.Camera weight="fill" color="#FBB034" size={size} />
              </Box>
            ) : (
              <Icon.Camera weight="fill" color="#303030" size={size} />
            ),
        }}
      />
      <Tab.Screen
        name={routes.app.tabRoutes.contacts}
        component={Contacts}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused}) =>
            focused ? (
              <Box
                bg="light[0]"
                w={20}
                h={12}
                borderRadius={50}
                alignItems="center"
                justifyContent="center">
                <Icon.User weight="fill" color="#FBB034" size={size} />
              </Box>
            ) : (
              <Icon.User weight="fill" color="#303030" size={size} />
            ),
        }}
      />
      <Tab.Screen
        name={routes.app.tabRoutes.settings}
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused}) =>
            focused ? (
              <Box
                bg="light[0]"
                w={20}
                h={12}
                borderRadius={50}
                alignItems="center"
                justifyContent="center">
                <Icon.Gear weight="fill" color="#FBB034" size={size} />
              </Box>
            ) : (
              <Icon.Gear weight="fill" color="#303030" size={size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
