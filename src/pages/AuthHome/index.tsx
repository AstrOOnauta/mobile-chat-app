import {Heading, VStack} from 'native-base';
import React from 'react';

export default function AuthHome() {
  return (
    <VStack
      bg={{
        linearGradient: {
          colors: ['primary[0]', 'secondary[0]'],
          start: [0, 0],
          end: [0, 0.45],
        },
      }}
      flex={1}
      alignItems="center"
      justifyContent="center">
      <Heading color="light[0]" numberOfLines={1}>
        Welcome to <Heading color="primary[0]">Meteor Prime</Heading>
      </Heading>
    </VStack>
  );
}
