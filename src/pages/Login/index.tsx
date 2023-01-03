import {Heading, VStack} from 'native-base';
import React from 'react';

export default function Login() {
  return (
    <VStack
      bg="secondary[0]"
      flex={1}
      alignItems="center"
      justifyContent="center">
      <Heading color="light[0]">Login!</Heading>
    </VStack>
  );
}
