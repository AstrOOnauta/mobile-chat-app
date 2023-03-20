import React from 'react';
import {HStack, Text, Avatar, VStack, Box} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {format, isToday, isYesterday} from 'date-fns';

import {routes} from 'src/shared/constants/routes';

interface ChatCardProps {
  info: {
    isGroup?: boolean;
    groupId?: string;
    chatId?: string;
    displayName: string;
    photoUrl: string;
    lastMessage: {
      userId: string;
      displayName: string;
      message: string;
      timestamp: number;
    };
    unreadMessages: number;
    isPinned: boolean;
    membersCount?: number;
  };
}

export default function ChatCard({info}: ChatCardProps) {
  const navigation = useNavigation();

  function getLastMessageDate() {
    const date = new Date(info.lastMessage.timestamp * 1000);

    if (isToday(date)) {
      return format(date, 'p');
    }

    if (isYesterday(date)) {
      return 'Yesterday';
    }

    return format(date, 'dd/MM/yy');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() =>
        info.isGroup
          ? undefined
          : navigation.navigate(routes.app.chatBox as never, {info} as never)
      }>
      <HStack
        max-w="100%"
        bg="secondary[0]"
        borderWidth={1}
        borderColor="secondary[-1]">
        <Box
          borderRightWidth={1}
          borderColor="secondary[-1]"
          p={2}
          justifyContent="center">
          <Avatar
            alignSelf="center"
            size="md"
            bg="lightBlue.400"
            source={
              info.photoUrl
                ? {
                    uri: info.photoUrl,
                  }
                : require('../../assets/images/user-icon.png')
            }>
            OR
          </Avatar>
        </Box>
        <VStack w="100%" flexShrink="1" justifyContent="space-between" p={2}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              fontSize="xl"
              fontWeight="bold"
              color="light[0]"
              mr={4}>
              {info.displayName}
            </Text>
            <Text fontSize="xs" color="light[1]">
              {getLastMessageDate()}
            </Text>
          </HStack>
          <HStack
            flexShrink="1"
            justifyContent="space-between"
            alignItems="flex-end">
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              fontSize="sm"
              color="light[1]"
              flexShrink="1"
              mr={4}>
              {info.isGroup ? `${info.lastMessage.displayName}: ` : ''}
              {info.lastMessage.message}
            </Text>
            <Box px={2} borderRadius={50} bg="primary[0]">
              <Text fontSize="md" fontWeight="bold" color="secondary[1]">
                {info.unreadMessages}
              </Text>
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
