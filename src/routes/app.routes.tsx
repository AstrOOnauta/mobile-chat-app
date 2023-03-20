import React, {useState, useContext, useEffect} from 'react';
import {Modal} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import TabRoutes from './tab.routes';
import SettingsRoutes from './settings.routes';
import Onboarding from 'src/pages/Onboarding';

import AuthContext from 'src/shared/contexts/AuthContext';
import ChatBox from 'src/pages/ChatBox';
import {AppRoutesParamsList} from 'src/shared/interfaces/routes';

export default function AppRoutes() {
  const {user} = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const Stack = createStackNavigator<AppRoutesParamsList>();

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
        <Stack.Screen name="tab-navigation" component={TabRoutes} />
        <Stack.Screen name="settings-navigation" component={SettingsRoutes} />
        <Stack.Screen name="chat-box" component={ChatBox} />
      </Stack.Navigator>
    </>
  );
}
