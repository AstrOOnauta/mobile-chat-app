import React, {useState} from 'react';
import {
  HStack,
  VStack,
  Box,
  Input,
  Text,
  Avatar,
  Image,
  FlatList,
} from 'native-base';
import {
  Image as RNImage,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import * as Icon from 'phosphor-react-native';

import {AppRoutesParamsList} from 'src/shared/interfaces/routes';
import BackButton from 'src/components/BackButton';
import {format, isSameDay, isToday, isYesterday} from 'date-fns';

const CHAT_MESSAGES_DATA = [
  {
    userId: '1',
    messageId: '1',
    messageType: 'image',
    message:
      'https://images.unsplash.com/photo-1679257934018-7da901d25a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    timestamp: 1679263970,
  },
  {
    userId: '1',
    messageId: '2',
    messageType: 'text',
    message: 'In sagittis sem augue, vitae mollis.',
    timestamp: 1679263977,
  },
  {
    userId: '2',
    messageId: '3',
    messageType: 'text',
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    timestamp: 1679264031,
  },
  {
    userId: '1',
    messageId: '4',
    messageType: 'text',
    message: 'Vestibulum accumsan.',
    timestamp: 1679267109,
  },
  {
    userId: '2',
    messageId: '5',
    messageType: 'text',
    message: 'vulputate.',
    timestamp: 1679317119,
  },
  {
    userId: '2',
    messageId: '6',
    messageType: 'text',
    message: 'Lorem Ipsum is.',
    timestamp: 1679317120,
  },
].sort((a, b) => {
  return b.timestamp - a.timestamp;
});

interface ImageSize {
  messageId: string;
  width: number;
  height: number;
}

export default function ChatBox({
  route,
  navigation,
}: StackScreenProps<AppRoutesParamsList, 'chat-box'>) {
  const [imageSize, setImageSize] = useState<ImageSize[]>([]);

  const {info} = route.params;

  function displayDateBadge(item: typeof CHAT_MESSAGES_DATA[0], index: number) {
    let date = null;
    let displayDate = '';

    if (
      CHAT_MESSAGES_DATA[CHAT_MESSAGES_DATA.length - 1].messageId ===
      item.messageId
    ) {
      date = new Date(item.timestamp * 1000);
    }

    if (
      CHAT_MESSAGES_DATA[index - 1] &&
      !isSameDay(
        item.timestamp * 1000,
        CHAT_MESSAGES_DATA[index - 1].timestamp * 1000,
      )
    ) {
      date = new Date(CHAT_MESSAGES_DATA[index - 1].timestamp * 1000);
    }

    if (date) {
      if (isToday(date)) {
        displayDate = 'Today';
      } else if (isYesterday(date)) {
        displayDate = 'Yesterday';
      } else {
        displayDate = format(date, 'LLLL d, yyyy');
      }

      return (
        <HStack w="100%" pt={2} pb={3} justifyContent="center">
          <Text
            py={1.5}
            px={2}
            bg="secondary[0]"
            color="light[0]"
            fontWeight="bold">
            {displayDate}
          </Text>
        </HStack>
      );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <VStack
        bg="secondary[0]"
        flex={1}
        alignItems="center"
        justifyContent="center">
        <HStack w="100%" h={16} py={4} alignItems="center">
          <Box
            w={Dimensions.get('window').width * 0.18}
            h="100%"
            justifyContent="center"
            alignItems="center">
            <BackButton />
          </Box>
          <TouchableOpacity
            style={{
              width: Dimensions.get('window').width * 0.6,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              fontSize="xl"
              fontWeight="bold"
              color="light[0]">
              {info.displayName}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: Dimensions.get('window').width * 0.1,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: Dimensions.get('window').width * 0.12,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon.DotsThreeVertical weight="bold" color="#F3F3F3" size={40} />
          </TouchableOpacity>
        </HStack>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
          <Box width="100%" flex={1} px={4} pb={4}>
            <FlatList
              pt={2}
              inverted
              showsVerticalScrollIndicator={false}
              data={CHAT_MESSAGES_DATA}
              renderItem={({item, index}) => {
                if (item.messageType === 'image') {
                  RNImage.getSize(item.message, (width, height) => {
                    setImageSize([
                      ...imageSize,
                      {messageId: item.messageId, width, height},
                    ]);
                  });

                  return (
                    <Box
                      key={item.messageId}
                      w="100%"
                      mt={1}
                      alignItems={
                        item.userId === '1' ? 'flex-end' : 'flex-start'
                      }
                      onStartShouldSetResponder={() => true}>
                      {displayDateBadge(item, index)}
                      <TouchableOpacity activeOpacity={0.6}>
                        <Box
                          maxWidth={Dimensions.get('window').width * 0.75}
                          bg={item.userId === '1' ? 'primary[0]' : 'light[0]'}
                          p={2.5}
                          borderRadius={20}
                          borderBottomRightRadius={item.userId === '1' ? 0 : 20}
                          borderBottomLeftRadius={item.userId === '1' ? 20 : 0}
                          alignItems="flex-end">
                          <Image
                            w={
                              imageSize.filter(image => {
                                return image.messageId === item.messageId;
                              })[0]?.width
                            }
                            h={
                              imageSize.filter(image => {
                                return image.messageId === item.messageId;
                              })[0]?.height
                            }
                            maxH={Dimensions.get('window').width * 0.75}
                            resizeMode="cover"
                            source={{
                              uri: item.message,
                            }}
                            alt="Chat background image"
                          />
                          <Text color="secondary[-1]" fontSize="xs">
                            {format(new Date(item.timestamp * 1000), 'p')}
                          </Text>
                        </Box>
                      </TouchableOpacity>
                    </Box>
                  );
                }
                return (
                  <Box
                    key={item.messageId}
                    w="100%"
                    mt={1}
                    alignItems={item.userId === '1' ? 'flex-end' : 'flex-start'}
                    onStartShouldSetResponder={() => true}>
                    {displayDateBadge(item, index)}
                    <TouchableOpacity activeOpacity={0.6}>
                      <Box
                        maxWidth={Dimensions.get('window').width * 0.75}
                        bg={item.userId === '1' ? 'primary[0]' : 'light[0]'}
                        p={2.5}
                        borderRadius={20}
                        borderBottomRightRadius={item.userId === '1' ? 0 : 20}
                        borderBottomLeftRadius={item.userId === '1' ? 20 : 0}
                        flexDir={item.message.length > 24 ? 'column' : 'row'}
                        alignItems="flex-end">
                        <Text
                          color="secondary[0]"
                          fontSize="md"
                          lineHeight="md">
                          {item.message}
                        </Text>
                        <Text color="secondary[-1]" fontSize="xs" ml={2}>
                          {format(new Date(item.timestamp * 1000), 'p')}
                        </Text>
                      </Box>
                    </TouchableOpacity>
                  </Box>
                );
              }}
            />
            <Input
              w="100%"
              px={4}
              py={2.5}
              bg="secondary[0]"
              color="light[0]"
              fontSize="md"
              borderWidth={0}
              borderRadius={50}
              shadow="2"
              _focus={{
                bg: 'secondary[-1]',
                selectionColor: 'rgba(255,255,255,.4)',
              }}
            />
            <Image
              zIndex={-1}
              position="absolute"
              w={Dimensions.get('window').width}
              h={Dimensions.get('window').height - 64}
              resizeMode="cover"
              source={{
                uri: 'https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
              }}
              alt="Chat background image"
            />
          </Box>
        </KeyboardAvoidingView>
      </VStack>
    </TouchableWithoutFeedback>
  );
}
