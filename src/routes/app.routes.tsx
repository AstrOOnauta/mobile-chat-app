import React, {useState, useContext, useEffect} from 'react';
import {Modal} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from 'src/shared/constants/routes';
import TabRoutes from './tab.routes';
import SettingsRoutes from './settings.routes';
import Onboarding from 'src/pages/Onboarding';

import AuthContext from 'src/shared/contexts/AuthContext';

export default function AppRoutes() {
  const {user} = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const Stack = createStackNavigator();

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (!user?.displayName) {
      setIsModalOpen(true);
    }
  }, []);

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
