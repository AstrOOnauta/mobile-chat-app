import React, {useState, useContext} from 'react';
import {Alert} from 'react-native';
import {Heading, HStack, Image, Pressable, Text, VStack} from 'native-base';
import OtpInputs from 'react-native-otp-inputs';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

import Button from 'src/components/Form/Button';
import AuthContext from 'src/shared/contexts/AuthContext';

export default function ConfirmOTP() {
  const {setHasUser} = useContext(AuthContext);

  const [OTPCode, setOTPCode] = useState<string>('');

  function onSubmit() {
    if (OTPCode.length < 6) {
      return Alert.alert('Meteor Chat', 'Fill with OTP Code');
    }

    setHasUser(true);
  }

  function resendOTPCode() {
    return Alert.alert('Meteor Chat', 'Wait 30s before resend the SMS');
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
          Confirm OTP Code
        </Heading>
        <VStack w="100%" flex={1} mt={20} justifyContent="flex-start">
          <Text color="light[0]" fontSize="md" fontWeight="bold" mb={4}>
            Enter 6-digit OTP Code
          </Text>
          <HStack>
            <OtpInputs
              inputStyles={{
                textAlign: 'center',
                color: '#F3F3F3',
                backgroundColor: '#575757',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#F3F3F3',
                borderRadius: 8,
                width: 42,
                height: 48,
              }}
              handleChange={code => setOTPCode(code)}
              numberOfInputs={6}
              autofillFromClipboard
            />
          </HStack>
          <HStack justifyContent="flex-end" alignItems="flex-end">
            <Text
              textAlign="right"
              color="light[0]"
              fontSize="xs"
              fontWeight="normal"
              mt={4}>
              Sent SMS to{' '}
              <Text fontWeight="bold">+55 84 99999-9999.{'  '}</Text>
            </Text>
            <Pressable _pressed={{opacity: 0.6}}>
              <Text fontSize="xs" fontWeight="bold" color="primary[0]">
                Wrong Number?
              </Text>
            </Pressable>
          </HStack>
          <Button
            type="primary"
            title="Confirm Code"
            onPress={onSubmit}
            mt={8}
          />
          <Button
            isDisabled
            type="secondary"
            title="Resend SMS in 30s"
            onPress={resendOTPCode}
            mt={5}
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
    </TouchableWithoutFeedback>
  );
}
