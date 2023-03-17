import React, {useContext, useEffect, useState} from 'react';
import {Alert, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {Box, HStack, ScrollView, Text, VStack} from 'native-base';
import {ICountry, PhoneInput} from 'react-native-international-phone-number';
import {Controller, FieldValues, useForm} from 'react-hook-form';

import BackButton from 'src/components/BackButton';
import ChangePicture from 'src/components/ChangePicture';
import Input from 'src/components/Form/Input';
import Button from 'src/components/Form/Button';
import AuthContext from 'src/shared/contexts/AuthContext';

interface FormProps extends FieldValues {
  username: string;
  name: string;
  phoneNumber: string;
  email: string;
}

export default function Profile() {
  const {user} = useContext(AuthContext);

  const [profilePicture, setProfilePicture] = useState<string>(
    user?.photoURL || '',
  );
  const [selectedCountry, setSelectedCountry] = useState<undefined | ICountry>(
    undefined,
  );

  const {control, handleSubmit, setValue, watch} = useForm<FormProps>();

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }

  function changePicture(picture: string) {
    setProfilePicture(picture);
  }

  function onSubmit(form: FormProps) {
    Alert.alert(
      'Meteor Chat',
      `Profile Edited Successfully! \n
      User ID: ${form.userId} \n
      Name: ${form.name} \n
      Phone Number: ${selectedCountry?.callingCode[0]} ${form.phoneNumber} \n
      E-mail: ${form.email} \n
      `,
    );
  }

  useEffect(() => {
    const watchPhoneNumber = watch('phoneNumber');

    setValue('userId', user?.uid);
    setValue('name', user?.displayName as string);
    setValue('phoneNumber', watchPhoneNumber);
    setValue('email', user?.email as string);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <VStack bg="secondary[0]" flex={1} px={4} py={6}>
          <HStack justifyContent="space-between">
            <BackButton />
            <ChangePicture
              picture={profilePicture}
              changePicture={changePicture}
            />
            <VStack w={10} h={10} />
          </HStack>
          <VStack py={6} px={2}>
            <Box mb={8}>
              <Text mb={2} color="light[0]" fontSize="md" fontWeight="medium">
                User ID
              </Text>
              <Controller
                name="userId"
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    placeholder="Insert your username here"
                    value={value}
                    onChangeText={onChange}
                    isDisabled
                  />
                )}
              />
            </Box>
            <Box mb={8}>
              <Text mb={2} color="light[0]" fontSize="md" fontWeight="medium">
                Name
              </Text>
              <Controller
                name="name"
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    placeholder="Insert your name here"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
            </Box>
            <Box mb={7}>
              <Text mb={2} color="light[0]" fontSize="md" fontWeight="medium">
                Phone Number
              </Text>
              <Controller
                name="phoneNumber"
                control={control}
                render={({field: {onChange, value}}) => (
                  <PhoneInput
                    containerStyle={{
                      borderColor: '#F3F3F3',
                      backgroundColor: '#575757',
                      borderRadius: 4,
                    }}
                    inputStyle={{color: '#F3F3F3'}}
                    placeholderTextColor="#B9B9B9"
                    withDarkTheme
                    defaultValue={user?.phoneNumber as string}
                    value={value}
                    onChangePhoneNumber={onChange}
                    selectedCountry={selectedCountry}
                    onChangeSelectedCountry={handleSelectedCountry}
                  />
                )}
              />
            </Box>
            <Box mb={8}>
              <Text mb={2} color="light[0]" fontSize="md" fontWeight="medium">
                Email
              </Text>
              <Controller
                name="email"
                control={control}
                render={({field: {onChange, value}}) => (
                  <Input
                    placeholder="Insert your email here"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
            </Box>
            <Box mt={12}>
              <Button
                type="primary"
                title="Edit Profile"
                onPress={handleSubmit(onSubmit)}
              />
            </Box>
          </VStack>
        </VStack>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
