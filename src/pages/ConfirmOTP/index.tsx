/* eslint-disable prefer-const */
import React, {useState, useContext, useEffect} from 'react';
import {Alert} from 'react-native';
import {Heading, HStack, Image, Pressable, Text, VStack} from 'native-base';
import OtpInputs from 'react-native-otp-inputs';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import Button from 'src/components/Form/Button';
import AuthContext from 'src/shared/contexts/AuthContext';
import {AuthRoutesParamsList} from 'src/shared/interfaces/routes';

export default function ConfirmOTP({
  route,
  navigation,
}: StackScreenProps<AuthRoutesParamsList, 'confirm-otp'>) {
  const {setUser} = useContext(AuthContext);

  const [OTPCode, setOTPCode] = useState<string>('');
  const [secondsToResend, setSecondsToResend] = useState<number>(30);
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [isResending, setIsResending] = useState<boolean>(false);
  const [resendConfirmation, setResendConfirmation] = useState<any>(null);

  let {confirmation, phoneNumber} = route.params;

  function goBack() {
    Alert.alert(
      'Meteor Chat',
      'Would you like to change your phone number?',
      [
        {text: 'Cancel'},
        {
          text: 'Yes',
          onPress: () => navigation.goBack(),
        },
      ],
      {cancelable: false},
    );
  }

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
  }

  async function onSubmit() {
    if (OTPCode.length < 6) {
      return Alert.alert('Meteor Chat', 'Fill with OTP Code');
    }

    setIsSubmiting(true);

    try {
      if (resendConfirmation) {
        await resendConfirmation.confirm(OTPCode);
      } else {
        await confirmation.confirm(OTPCode);
      }

      auth().onAuthStateChanged(onAuthStateChanged);
    } catch (error) {
      console.log('Invalid code.');
    }

    setIsSubmiting(false);
  }

  async function resendOTPCode() {
    if (secondsToResend > 0) {
      return Alert.alert(
        'Meteor Chat',
        `Wait ${secondsToResend}s before resend the SMS`,
      );
    }

    setIsResending(true);

    const res = await auth().signInWithPhoneNumber(phoneNumber);
    setResendConfirmation(res);

    setIsResending(false);
    setSecondsToResend(30);
  }

  function countdown() {
    if (secondsToResend > 0) {
      const interval = setTimeout(() => {
        setSecondsToResend(secondsToResend - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }

  useEffect(() => {
    countdown();
  }, [secondsToResend]);

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
              <Text fontWeight="bold">
                {phoneNumber}.{'  '}
              </Text>
            </Text>
            <Pressable _pressed={{opacity: 0.6}} onPress={goBack}>
              <Text fontSize="xs" fontWeight="bold" color="primary[0]">
                Wrong Number?
              </Text>
            </Pressable>
          </HStack>
          <Button
            isDisabled={isSubmiting}
            isLoading={isSubmiting}
            type="primary"
            title="Confirm Code"
            onPress={onSubmit}
            mt={8}
          />
          <Button
            isDisabled={secondsToResend > 0}
            isLoading={isResending}
            type="secondary"
            title={`Resend SMS ${
              secondsToResend > 0 ? `in ${secondsToResend}s` : ''
            }`}
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
