import React, {useState} from 'react';
import {Modal} from 'react-native';
import {Heading, HStack, Image, Pressable, Text, VStack} from 'native-base';
import * as Icon from 'phosphor-react-native';

import {version} from '../../../package.json';
import {useNavigation} from '@react-navigation/native';
import {routes} from 'src/shared/constants/routes';
import WebViewPage from 'src/components/WebView';

const CARDS_DATA = [
  {
    id: 0,
    name: 'Profile',
    screen: routes.app.settingsRoutes.profile,
    borderColor: 'light[0]',
    color: '#F3F3F3',
  },
  {
    id: 1,
    screen: routes.app.settingsRoutes.notifications,
    name: 'Notifications',
    borderColor: 'light[0]',
    color: '#F3F3F3',
  },
  {
    id: 2,
    name: 'Terms of Service',
    borderColor: 'light[0]',
    color: '#F3F3F3',
  },
  {
    id: 3,
    name: 'Logout',
    borderColor: 'danger',
    color: '#FF5B5B',
  },
];

export default function Settings() {
  const [isWebViewOpen, setIsWebViewOpen] = useState<boolean>(false);

  const navigation = useNavigation();

  function openWebView() {
    setIsWebViewOpen(!isWebViewOpen);
  }

  function onSubmit(item: typeof CARDS_DATA[0]) {
    if (item.screen) {
      return navigation.navigate(
        routes.app.settingsNavigation as never,
        {screen: item.screen} as never,
      );
    }

    if (item.id === 2) {
      return openWebView();
    }
  }

  return (
    <VStack bgColor="secondary[0]" flex={1} alignItems="center" p={6}>
      <Heading color="primary[0]" numberOfLines={1} my={6}>
        Settings
      </Heading>
      <VStack w="100%" flex={1}>
        {CARDS_DATA.map(item => {
          return (
            <Pressable
              key={item.id}
              _pressed={{bg: 'transparent', opacity: 0.6}}
              onPress={() => onSubmit(item)}>
              <HStack
                w="100%"
                px={4}
                py={3}
                my={3}
                borderColor={item.borderColor}
                borderWidth={1}
                borderRadius={12}
                justifyContent="space-between">
                <Text color={item.color} fontSize="lg" fontWeight="bold">
                  {item.name}
                </Text>
                <Icon.CaretRight size={28} color={item.color} weight="bold" />
              </HStack>
            </Pressable>
          );
        })}
      </VStack>
      <HStack alignItems="center" justifyContent="center" mb={20}>
        <Image
          w={50}
          h={50}
          mr={2}
          alt="app-logo"
          source={require('../../assets/images/logo.png')}
        />
        <VStack>
          <Text color="primary[0]" fontSize="xl" fontWeight="bold">
            Meteor Prime
          </Text>
          <Text color="light[1]" fontSize="xs">
            v{version}
          </Text>
        </VStack>
      </HStack>

      <Modal animationType="slide" transparent visible={isWebViewOpen}>
        <WebViewPage
          link="https://github.com/AstrOOnauta/mobile-chat-app"
          title="Terms of Use"
          closeWebView={openWebView}
        />
      </Modal>
    </VStack>
  );
}
