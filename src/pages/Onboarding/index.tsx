import React, {useState, useContext} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {HStack, Text, VStack} from 'native-base';
import * as Icon from 'phosphor-react-native';
import firebase from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

import Button from 'src/components/Form/Button';
import Input from 'src/components/Form/Input';
import ChangePicture from 'src/components/ChangePicture';
import AuthContext from 'src/shared/contexts/AuthContext';

interface OnboardingProps {
  closeModal: () => void;
}

export default function Onboarding({closeModal}: OnboardingProps) {
  const {user} = useContext(AuthContext);

  const [inputText, setInputText] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function changePicture(picture: string) {
    setProfilePicture(picture);
  }

  async function onSubmit() {
    if (!inputText) {
      return Alert.alert('Meteor Chat', 'Fill the input field with your name');
    }

    setIsLoading(true);

    let photoURL = '';

    if (profilePicture) {
      const profilePictureRef = storage().ref(`profile-picture-${user?.uid}`);
      await profilePictureRef.putString(profilePicture, 'data_url');
      await profilePictureRef
        .getDownloadURL()
        .then(url => {
          photoURL = url;
        })
        .catch(error => {
          console.log('Meteor Chat', error.response.message);
        });
    }

    const update = {
      displayName: inputText,
      photoURL,
    };

    await firebase.auth().currentUser?.updateProfile(update);

    setIsLoading(false);

    closeModal();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      keyboardVerticalOffset={1}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <VStack
          bg="secondary[0]"
          flex={1}
          p={6}
          justifyContent="center"
          mt={-24}>
          <ChangePicture
            picture={profilePicture}
            changePicture={changePicture}
          />
          <Text mt={8} mb={4} color="light[0]" fontSize="md" fontWeight="bold">
            Your Name
          </Text>
          <Input
            value={inputText}
            onChangeText={setInputText}
            defaultValue={user?.displayName || ''}
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
          <Button
            isLoading={isLoading}
            mt={8}
            type="primary"
            title="Enter"
            onPress={onSubmit}
          />
        </VStack>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
