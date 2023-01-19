import React, {useState} from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Modal} from 'react-native';
import * as Icon from 'phosphor-react-native';

import Onboarding from 'src/pages/Onboarding';
import Home from 'src/pages/Home';
import {Box} from 'native-base';
import Camera from 'src/pages/Camera';

export default function AppRoutes() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const Tab = createBottomTabNavigator();

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal visible={isModalOpen}>
        <Onboarding closeModal={closeModal} />
      </Modal>
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
          name="Home"
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
          name="Camera"
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
          name="Contacts"
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
                  <Icon.User weight="fill" color="#FBB034" size={size} />
                </Box>
              ) : (
                <Icon.User weight="fill" color="#303030" size={size} />
              ),
          }}
        />
        <Tab.Screen
          name="Settings"
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
                  <Icon.Gear weight="fill" color="#FBB034" size={size} />
                </Box>
              ) : (
                <Icon.Gear weight="fill" color="#303030" size={size} />
              ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
