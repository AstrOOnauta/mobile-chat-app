import React from 'react';
import {ScrollView, VStack} from 'native-base';

import ChatCard from 'src/components/ChatCard';

const CHAT_INFO_DATA = {
  isGroup: false,
  chatId: '1',
  displayName: 'Olivia',
  photoUrl:
    'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
  lastMessage: {
    userId: '2',
    displayName: 'Olivia',
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    timestamp: 1679264031,
  },
  unreadMessages: 6,
  isPinned: false,
};

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
          return <ChatCard key={index} info={CHAT_INFO_DATA} />;
        })}
      </ScrollView>
    </VStack>
  );
}
