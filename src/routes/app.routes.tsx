import React, {useState} from 'react';
import {Modal} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import TabRoutes from './tab.routes';

import Onboarding from 'src/pages/Onboarding';

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
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
      </Stack.Navigator>
    </>
  );
}
