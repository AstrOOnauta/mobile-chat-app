import React from 'react';
import {ScrollView, VStack} from 'native-base';
import ChatCard from 'src/components/ChatCard';

export default function Chats() {
  return (
    <VStack
      bg="secondary[0]"
      flex={1}
      alignItems="center"
      justifyContent="center"
      pb={20}>
      <ScrollView width="100%" flex={1} showsVerticalScrollIndicator={false}>
        {[...Array(10).keys()].map((item, index) => {
          return <ChatCard key={index} />;
        })}
      </ScrollView>
    </VStack>
  );
}
