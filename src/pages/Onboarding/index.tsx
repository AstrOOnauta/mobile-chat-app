import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Avatar, Box, HStack, Input, Pressable, Text, VStack} from 'native-base';
import * as Icon from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';

import Button from 'src/components/Form/Button';

export default function Onboarding() {
  const [inputText, setInputText] = useState<string>('');

  const navigation = useNavigation();

  function onSubmit() {
    if (!inputText) {
      return Alert.alert('Meteor Chat', 'Fill the input field with your name');
    }

    navigation.navigate('home' as never);
  }

  return (
    <VStack bg="secondary[0]" flex={1} p={6} justifyContent="center" mt={-24}>
      <Box w={32} h={32} alignSelf="center">
        <Avatar
          bg="light[0]"
          alignSelf="center"
          size="2xl"
          source={require('../../assets/images/user-icon.png')}
          p={4}
        />
        <Pressable
          position="absolute"
          bottom={0}
          right={0}
          pt={1}
          w={10}
          h={10}
          borderRadius={50}
          bg="primary[0]"
          alignItems="center"
          justifyContent="center"
          _pressed={{opacity: 0.6}}>
          <Icon.Camera weight="fill" color="#303030" size={28} />
        </Pressable>
      </Box>
      <Text mt={8} mb={4} color="light[0]" fontSize="md" fontWeight="bold">
        Your Name
      </Text>
      <Input
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter your name here"
        bg="secondary[-1]"
        color="light[0]"
        borderColor="light[0]"
        fontSize="md"
        _focus={{
          bg: 'secondary[-1]',
          borderColor: 'light[0]',
          color: 'light[0]',
          selectionColor: 'light[0]',
        }}
      />
      <HStack mt={2}>
        <Icon.Info weight="fill" color="#B9B9B9" size={20} />
        <Text color="light[0]" fontSize="xs" fontWeight="normal" ml={1}>
          Don&apos;t worry, you will be able to modify the above information
          {'\n'}
          in the user profile settings
        </Text>
      </HStack>
      <Button mt={8} type="primary" title="Enter" onPress={onSubmit} />
    </VStack>
  );
}
