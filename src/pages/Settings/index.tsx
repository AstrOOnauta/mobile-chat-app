import React from 'react';
import {Heading, HStack, Image, Pressable, Text, VStack} from 'native-base';
import * as Icon from 'phosphor-react-native';

import {version} from '../../../package.json';

const CARDS_DATA = [
  {
    id: 0,
    name: 'Profile',
    borderColor: 'light[0]',
    color: '#F3F3F3',
  },
  {
    id: 1,
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
              _pressed={{bg: 'transparent', opacity: 0.6}}>
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
    </VStack>
  );
}
