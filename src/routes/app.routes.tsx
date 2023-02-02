import React, {useState} from 'react';
import {Modal} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import TabRoutes from './tab.routes';
import SettingsRoutes from './settings.routes';

import Onboarding from 'src/pages/Onboarding';
import {routes} from 'src/shared/constants/routes';

export default function AppRoutes() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const Stack = createStackNavigator();

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal visible={isModalOpen}>
        <Onboarding closeModal={closeModal} />
      </Modal>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.app.tabNavigation} component={TabRoutes} />
        <Stack.Screen
          name={routes.app.settingsNavigation}
          component={SettingsRoutes}
        />
      </Stack.Navigator>
    </>
  );
}
