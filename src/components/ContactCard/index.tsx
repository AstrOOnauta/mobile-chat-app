import React from 'react';
import {HStack, Text, Avatar, VStack, Box} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default function ContactCard() {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <HStack
        max-w="100%"
        backgroundColor="secondary[0]"
        borderWidth={1}
        borderColor="secondary[-1]">
        <Box borderRightWidth={1} borderColor="secondary[-1]" p={2}>
          <Avatar
            alignSelf="center"
            size="lg"
            bg="lightBlue.400"
            source={{
              uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
            }}>
            OR
          </Avatar>
        </Box>
        <VStack w="100%" flexShrink="1" justifyContent="space-between" p={2}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            fontSize="xl"
            fontWeight="bold"
            color="light[0]"
            mr={4}>
            Olivia
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            fontSize="sm"
            color="light[1]"
            flexShrink="1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
