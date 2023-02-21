import React from 'react';
import {HStack, Text, Avatar, VStack, Box} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default function ChatCard() {
  return (
    <TouchableOpacity activeOpacity={0.6}>
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
            source={{
              uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
            }}>
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
              Olivia
            </Text>
            <Text fontSize="xs" color="light[1]">
              Yesterday
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <Box px={2} borderRadius={50} bg="primary[0]">
              <Text fontSize="md" fontWeight="bold" color="secondary[1]">
                6
              </Text>
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
