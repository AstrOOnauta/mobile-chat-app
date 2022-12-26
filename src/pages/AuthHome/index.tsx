import {Heading, VStack} from 'native-base';
import React from 'react';

export default function AuthHome() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center">
      <Heading color="dark.100">Hello World!</Heading>
    </VStack>
  );
}
