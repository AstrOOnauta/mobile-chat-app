import React from 'react';
import {Heading, ScrollView, VStack} from 'native-base';
import ContactCard from 'src/components/ContactCard';

export default function Contacts() {
  return (
    <VStack
      bg="secondary[0]"
      flex={1}
      alignItems="center"
      justifyContent="center"
      pb={20}>
      <Heading color="primary[0]" numberOfLines={1} mt={6} mb={4}>
        Contacts
      </Heading>
      <ScrollView width="100%" flex={1} showsVerticalScrollIndicator={false}>
        {[...Array(10).keys()].map((item, index) => {
          return <ContactCard key={index} />;
        })}
      </ScrollView>
    </VStack>
  );
}
