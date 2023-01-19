import React from 'react';
import {Heading, VStack} from 'native-base';

export default function Contacts() {
  return (
    <VStack
      bg="secondary[0]"
      flex={1}
      alignItems="center"
      justifyContent="center">
      <Heading color="light[0]" numberOfLines={1}>
        Contacts
      </Heading>
    </VStack>
  );
}