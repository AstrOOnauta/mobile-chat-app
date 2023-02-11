import React, {useState} from 'react';
import {Alert} from 'react-native';
import {HStack, Text, VStack} from 'native-base';
import * as Icon from 'phosphor-react-native';

import Button from 'src/components/Form/Button';
import Input from 'src/components/Form/Input';
import ChangePicture from 'src/components/ChangePicture';

interface OnboardingProps {
  closeModal: () => void;
}

export default function Onboarding({closeModal}: OnboardingProps) {
  const [inputText, setInputText] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<string>('');

  function changePicture(picture: string) {
    setProfilePicture(picture);
  }

  function onSubmit() {
    if (!inputText) {
      return Alert.alert('Meteor Chat', 'Fill the input field with your name');
    }

    closeModal();
  }

  return (
    <VStack bg="secondary[0]" flex={1} p={6} justifyContent="center" mt={-24}>
      <ChangePicture picture={profilePicture} changePicture={changePicture} />
      <Text mt={8} mb={4} color="light[0]" fontSize="md" fontWeight="bold">
        Your Name
      </Text>
      <Input
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter your name here"
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
