import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Heading, Image, Text, VStack} from 'native-base';

import Button from 'src/components/Form/Button';

export default function AuthHome() {
  const navigation = useNavigation();

  return (
    <VStack
      bg={{
        linearGradient: {
          colors: ['primary[0]', 'secondary[0]'],
          start: [0, 0],
          end: [0, 0.42],
        },
      }}
      flex={1}>
      <Image
        w="100%"
        source={require('../../assets/images/auth-home-illustration.png')}
      />
      <VStack flex={1} alignItems="center" mt={-48} padding={6}>
        <VStack flex={1} w="100%" alignItems="center" mb={6}>
          <Image
            w={150}
            h={150}
            source={require('../../assets/images/logo.png')}
          />
          <Heading color="light[0]" numberOfLines={1} mt={8}>
            Welcome to <Heading color="primary[0]">Meteor Prime</Heading>
          </Heading>
          <Button
            type="primary"
            title="Continue"
            onPress={() => navigation.navigate('login' as never)}
            mt={12}
          />
        </VStack>
        <Text
          color="light[0]"
          fontSize="md"
          fontWeight="bold"
          textAlign="center">
          Connect with your friends {'\n'} for free!
        </Text>
      </VStack>
    </VStack>
  );
}
