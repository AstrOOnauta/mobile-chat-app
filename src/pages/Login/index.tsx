import React, {useState} from 'react';
import {Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Heading, HStack, Image, Pressable, Text, VStack} from 'native-base';
import {Country} from 'react-native-country-picker-modal';
import {PhoneInput, phoneMask} from 'react-native-international-phone-number';
import {useNavigation} from '@react-navigation/native';

import Checkbox from 'src/components/Checkbox';
import Button from 'src/components/Form/Button';

export default function Login() {
  const [selectedCountry, setSelectedCountry] = useState<undefined | Country>(
    undefined,
  );
  const [phoneInput, setPhoneInput] = useState('');
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const navigation = useNavigation();

  function onSubmit() {
    if (!phoneInput) {
      return Alert.alert('Meteor Chat', 'Fill in your phone number');
    }

    if (!isAgreed) {
      return Alert.alert(
        'Meteor Chat',
        'Accept the Terms of Service to continue',
      );
    }

    navigation.navigate('confirm-otp' as never);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <VStack bg="secondary[0]" flex={1} alignItems="center" p={6}>
        <Image
          w={100}
          h={100}
          my={9}
          source={require('../../assets/images/logo.png')}
        />
        <Heading color="light[0]" textAlign="center">
          Enter with your{'\n'}Mobile Phone Number
        </Heading>
        <VStack w="100%" flex={1} mt={60}>
          <Text color="light[0]" fontSize="md" fontWeight="bold">
            Mobile Phone
          </Text>
          <PhoneInput
            withDarkTheme
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            value={phoneInput}
            onChangeText={newValue =>
              setPhoneInput(
                phoneMask(newValue, selectedCountry?.callingCode[0]),
              )
            }
            inputStyle={{
              color: '#F3F3F3',
            }}
            containerStyle={{
              backgroundColor: '#575757',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#F3F3F3',
              marginVertical: 16,
            }}
          />
          <HStack>
            <Checkbox
              mr={3}
              isActive={isAgreed}
              onPress={() => setIsAgreed(!isAgreed)}
            />
            <Text color="light[0]" fontSize="sm" fontWeight="bold">
              I accept the{' '}
            </Text>
            <Pressable _pressed={{opacity: 0.6}}>
              <Text color="primary[0]" fontSize="sm" fontWeight="bold">
                Terms of Service
              </Text>
            </Pressable>
          </HStack>
          <Button type="primary" title="Send" onPress={onSubmit} mt={12} />
        </VStack>
        <Text
          color="light[0]"
          fontSize="md"
          fontWeight="bold"
          textAlign="center">
          Connect with your friends {'\n'} for free!
        </Text>
      </VStack>
    </TouchableWithoutFeedback>
  );
}
