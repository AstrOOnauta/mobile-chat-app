import React from 'react';
import {ScrollView, VStack} from 'native-base';
import ChatCard from 'src/components/ChatCard';

const GROUP_INFO_DATA = {
  isGroup: true,
  groupId: '1',
  displayName: 'D&D Sundays',
  photoUrl:
    'https://www.enworld.org/data/thumbs/2273-Ampersand%20on%20White.png',
  lastMessage: {
    userId: '2',
    displayName: 'Olivia',
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    timestamp: 1679264031,
  },
  unreadMessages: 2,
  isPinned: false,
  membersCount: 8,
};

export default function Groups() {
  return (
    <VStack
      bg="secondary[0]"
      flex={1}
      alignItems="center"
      justifyContent="center"
      pb={20}>
      <ScrollView width="100%" flex={1} showsVerticalScrollIndicator={false}>
        {[...Array(10).keys()].map((item, index) => {
          return <ChatCard key={index} info={GROUP_INFO_DATA} />;
        })}
      </ScrollView>
    </VStack>
  );
}
